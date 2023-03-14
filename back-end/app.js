const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const bcrypt = require("bcrypt");
const validateToken = require("./validateJWT");
const mysql = require("mysql");
const db = require("./db");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const multer = require("multer");
const nodemailer = require("nodemailer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // specify the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // specify the filename for uploaded files
  },
});
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    // specify the file type filter for uploaded files
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type."));
    }
  },
});

// Load environment variables from the .env file
dotenv.config({ path: "./.env" });
app.use(cors({ origin: "http://localhost:3000" }));

// Use the express.json middleware to parse JSON requests
app.use(express.json());

// Import the router for handling registration endpoints
const registerRouter = require("./register");
const loginRouter = require("./login");
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "kashifalikhan2111@gmail.com",
    pass: "fsbjhenyigngvkqg",
  },
});

// Register the router as middleware
app.post("/reset-pass", (req, res) => {
  const { code, newPassword } = req.body;

  // check if reset code exists in reset_pass table
  const checkCodeSql = `SELECT email FROM reset_pass WHERE code = '${code}'`;
  db.query(checkCodeSql, (err, result) => {
    if (err) throw err;

    if (result.length === 0) {
      res.status(404).send("Reset code not found.");
      return;
    }

    const email = result[0].email;

    // check if email exists in users table
    const checkEmailSql = `SELECT * FROM users WHERE email = '${email}'`;
    db.query(checkEmailSql, (err, result) => {
      if (err) throw err;

      if (result.length === 0) {
        res.status(404).send("User not found.");
        return;
      }

      // update user's password in database
      const userId = result[0].id;
      bcrypt.hash(newPassword, 10, (err, hashedPassword) => {
        if (err) {
          res.status(500).json({ message: "Error hashing password" });
          return;
        }
        const updateSql = `UPDATE users SET password = '${hashedPassword}' WHERE id = ${userId}`;
        db.query(updateSql, (err, result) => {
          if (err) throw err;

          // send email to user
          const mailOptions = {
            from: "kashifalikhan2111@gmail.com",
            to: email,
            subject: "Password Reset Successful",
            text: "Your password has been successfully reset.",
          };
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log(error);
              res.send("Error sending email.");
            } else {
              console.log("Email sent: " + info.response);
              res.send(`Password reset successful for ${email}.`);
            }
          });
        });
      });
    });
  });
});

app.post("/reset-password", (req, res) => {
  const { email } = req.body;

  // generate random code
  const code = crypto.randomBytes(4).toString("hex");

  // store email and code in database
  const sql = `INSERT INTO reset_pass (email, code)
               VALUES ('${email}', '${code}')`;
  db.query(sql, (err, result) => {
    if (err) throw err;

    // send email to user
    const mailOptions = {
      from: "kashifalikhan2111@gmail.com",
      to: email,
      subject: "Password Reset Code",
      text: `Your password reset code is ${code} Change password using the following link: http://localhost:3000/newpass/${code}.`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.send("Error sending email.");
      } else {
        console.log("Email sent: " + info.response);
        res.send(`Reset code sent to ${email}.`);
      }
    });
  });
});
app.use("/register", registerRouter);
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/login", loginRouter);
app.put(
  "/user/:id/image",
  validateToken,
  upload.single("profile_img"),
  (req, res) => {
    // get the filename of the uploaded image file from req.file
    const profile_img = req.file ? req.file.filename : null;

    // update the user's profile image in the database
    db.query(
      "UPDATE users SET profile_img = ? WHERE id = ?",
      [profile_img, req.params.id],
      (err, result) => {
        if (err) {
          res.status(500).json({ message: err });
          return console.log(profile_img, req.params.id);
        } else if (result.affectedRows === 0) {
          res.status(404).json({ message: "User not found." });
          return console.log("Sad");
        } else {
          res.json({ message: "Profile image updated successfully." });
          console.log(profile_img, req.params.id);
        }
      }
    );
  }
);
app.get("/user", validateToken, (req, res) => {
  // Do something with the authenticated user data
  const user = req.decodedToken;
  // res.json({ message: `Hello ${user.email}!` });

  db.query(
    "SELECT  id,first_name,	last_name, whatsapp_number, email, 	profile_img FROM users WHERE email = ?",
    [user.email],
    (err, result) => {
      if (err) {
        res.status(500).json({ message: err });
        return;
      } else {
        res.json({ details: result });
      }
    }
  );
});
app.put(
  "/user/:id",
  validateToken,

  (req, res) => {
    // get user ID, updated user information, and decoded token from request
    const userId = req.params.id;
    const { first_name, last_name, whatsapp_number } = req.body;
    const user = req.decodedToken;

    // get the filename of the uploaded image file from req.file
    const profile_img = req.file ? req.file.filename : null;

    // update user information in the database
    db.query(
      "UPDATE users SET first_name = ?, last_name = ?, whatsapp_number = ? WHERE email = ?",
      [first_name, last_name, whatsapp_number, user.email],
      (err, result) => {
        if (err) {
          res.status(500).json({ message: err });
          return console.log(
            first_name,
            last_name,
            whatsapp_number,

            user.email
          );
        } else if (result.affectedRows === 0) {
          res.status(404).json({ message: "User not found." });
          return console.log("Sad");
        } else {
          res.json({ message: "User updated successfully." });
          console.log(
            first_name,
            last_name,
            whatsapp_number,

            user.email
          );
        }
      }
    );
  }
);

app.get("/protected-route", validateToken, (req, res) => {
  // Do something with the authenticated user data
  const user = req.decodedToken;
  // res.json({ message: `Hello ${user.email}!` });

  db.query(
    "SELECT id, first_name, last_name, whatsapp_number, email FROM users WHERE email = ?",
    [user.email],
    (err, result) => {
      if (err) {
        res.status(500).json({ message: err });
        return;
      } else {
        res.json({ details: result });
      }
    }
  );
});
app.get("/template-details", validateToken, (req, res) => {
  // Do something with the authenticated user data
  const user = req.decodedToken;
  // res.json({ message: `Hello ${user.email}!` });

  db.query(
    "SELECT  id,user_email,template_label, template_category, template_message, site_url FROM template WHERE user_email = ?",
    [user.email],
    (err, result) => {
      if (err) {
        res.status(500).json({ message: err });
        return;
      } else {
        res.json({ details: result });
      }
    }
  );
});
app.put("/template-details/:id", validateToken, (req, res) => {
  const user = req.decodedToken;
  const templateId = req.params.id;
  const { template_label, template_category, template_message, site_url } =
    req.body;

  db.query(
    "UPDATE template SET template_label = ?, template_category = ?, template_message = ?, site_url = ? WHERE id = ? AND user_email = ?",
    [
      template_label,
      template_category,
      template_message,
      site_url,
      templateId,
      user.email,
    ],
    (err, result) => {
      if (err) {
        res.status(500).json({ message: err });
        return;
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: "Template not found." });
        return;
      } else {
        res.json({ message: "Template updated successfully." });
        console.log(
          template_label,
          template_category,
          template_message,
          site_url,
          templateId,
          user.email
        );
      }
    }
  );
});

app.delete("/template-details/:id", validateToken, (req, res) => {
  const user = req.decodedToken;
  const templateId = req.params.id;

  db.query(
    "DELETE FROM template WHERE user_email = ? AND id = ?",
    [user.email, templateId],
    (err, result) => {
      if (err) {
        res.status(500).json({ message: err });
        return;
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: "Template not found" });
        return;
      } else {
        res.json({ message: "Template deleted successfully" });
      }
    }
  );
});
app.get("/messagedata", validateToken, (req, res) => {
  // Do something with the authenticated user data
  const user = req.decodedToken;
  // res.json({ message: `Hello ${user.email}!` });

  db.query(
    "SELECT massage_from, massage_to, action, sent_on FROM massages_data WHERE massage_from = ?",
    [user.email],
    (err, messageResult) => {
      if (err) {
        res.status(500).json({ message: err });
        return;
      }

      const messageData = messageResult.map((row) => {
        return {
          massage_from: row.massage_from,
          massage_to: row.massage_to,
          action: row.action,
          sent_on: row.sent_on,
        };
      });

      res.json({ messageData });
    }
  );
});
app.get("/marketing", validateToken, (req, res) => {
  // Do something with the authenticated user data
  const user = req.decodedToken;
  // res.json({ message: `Hello ${user.email}!` });

  db.query(
    "SELECT name, email, medium, whatsapp_num,date FROM marketing WHERE email = ?",
    [user.email],
    (err, messageResult) => {
      if (err) {
        res.status(500).json({ message: err });
        return;
      }

      const messageData = messageResult.map((row) => {
        return {
          name: row.name,
          email: row.email,
          medium: row.medium,
          whatsapp_num: row.whatsapp_num,
          date: row.date,
        };
      });

      res.json({ messageData });
    }
  );
});
app.get("/category", (req, res) => {
  // Do something with the authenticated user data
  const user = req.decodedToken;
  // res.json({ message: `Hello ${user.email}!` });

  db.query("SELECT name, id FROM category ", (err, result) => {
    if (err) {
      res.status(500).json({ message: err });
      return;
    } else {
      res.json({ details: result });
    }
  });
});
app.post("/templates", validateToken, (req, res) => {
  // Do something with the authenticated user data
  const { label, category, message, url } = req.body;
  const token = req.headers.authorization.split(" ")[1];
  // res.json({ message: `Hello ${user.email}!` });

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    const user_email = decodedToken.email;

    db.query(
      "INSERT INTO template ( user_email,template_label, template_category, template_message, site_url) VALUES (?, ?, ?, ?, ?)",
      [user_email, label, category, message, url],
      (err, result) => {
        if (err) {
          res.status(500).json({ message: err });
          console.log(user_email, label, category, message, url, err);
          return;
        }

        res.status(200).json({ message: "Template added successfully" });
      }
    );
  } catch (err) {
    res.status(401).json({ message: "Invalid access token" });
  }
});

// Start the server
app.listen(3001, () => {
  console.log("Server started on port 3001");
});
