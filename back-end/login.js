const express = require("express");
const mysql = require("mysql");
const router = express.Router();
const bcrypt = require("bcrypt");

// Connect to the MySQL database
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

router.post("/", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
    if (err) {
      res
        .status(500)
        .json({ message: "Error retrieving user from the database" });
      return;
    }

    if (result.length === 0) {
      // If no user record is found with the provided email, return an error response
      res.status(401).json({ message: "Invalid email or password" });
      return;
    }

    const user = result[0];

    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        res.status(401).json({ message: "Invalid email or password" });
        // Handle the error
      } else if (result) {
        res.status(200).json({
          message: "Login successful",
          user: {
            id: user.id,
            name: user.first_name + user.last_name,
            email: user.email,
          },
        });
        // The passwords match
      } else {
        res.status(401).json({ message: "Invalid email or password" });
        // The passwords do not match
      }
    });
  });
});
// Route to handle POST requests to the /register endpoint

module.exports = router;
