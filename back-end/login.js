const express = require("express");
const mysql = require("mysql");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Connect to the MySQL database
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

// Route to handle POST requests to the /login endpoint
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

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        res.status(401).json({ message: "Invalid email or password" });
        return;
      }

      if (result) {
        // Passwords match - generate JWT token
        const privateKey = process.env.JWT_PRIVATE_KEY;
        const token = jwt.sign(
          { email: email },
          privateKey,
          { expiresIn: "24h" }, // Token expiration time
          (err, token) => {
            if (err) {
              res.status(500).json({ message: "Error generating JWT token" });
              return;
            }

            res.status(200).json({
              message: "Login successful",
              token: token,
              user: {
                id: user.id,
                name: user.first_name + user.last_name,
                email: user.email,
              },
            });
          }
        );
      } else {
        res.status(401).json({ message: "Invalid email or password" });
      }
    });
  });
});

module.exports = router;
