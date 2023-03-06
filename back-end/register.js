const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const db = require("./db");

// Route to handle POST requests to the /register endpoint
router.post("/", (req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const whatsapp_number = req.body.whatsapp_number;
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.status(500).json({ message: "Error checking for duplicate email" });
      return;
    }

    if (result.length > 0) {
      // If the email already exists in the database, return an error response
      res.status(400).json({ message: "Email already registered" });
      return;
    }

    // Hash the password using bcrypt
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        res.status(500).json({ message: "Error hashing password" });
        return;
      }

      // If the email doesn't exist in the database, insert the new user record with the hashed password
      db.query(
        "INSERT INTO users (first_name, last_name, whatsapp_number, email, password) VALUES (?, ?, ?, ?, ?)",
        [first_name, last_name, whatsapp_number, email, hashedPassword],
        (err, result) => {
          if (err) {
            res
              .status(500)
              .json({ message: "Error inserting data into the database" });
            return;
          }

          // Generate the JWT token
          const privateKey = process.env.JWT_PRIVATE_KEY;
          const token = jwt.sign(
            { email: email },
            privateKey,
            { expiresIn: "1h" }, // Token expiration time
            (err, token) => {
              if (err) {
                res.status(500).json({
                  message: "Error generating JWT token",
                });
                return;
              }

              res
                .status(200)
                .json({ message: "Data inserted successfully", token: token });
            }
          );
        }
      );
    });
  });
});

module.exports = router;
