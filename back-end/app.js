const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

const jwt = require("jsonwebtoken");

// Load environment variables from the .env file
dotenv.config({ path: "./.env" });
app.use(cors({ origin: "http://localhost:3000" }));

// Use the express.json middleware to parse JSON requests
app.use(express.json());

// Import the router for handling registration endpoints
const registerRouter = require("./register");
const loginRouter = require("./login");

// Register the router as middleware
app.use("/register", registerRouter);
app.use("/login", loginRouter);

// Start the server
app.listen(3001, () => {
  console.log("Server started on port 3001");
});
