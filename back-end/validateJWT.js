const jwt = require("jsonwebtoken");

function validateToken(req, res, next) {
  // Get the token from the request headers
  const token = req.headers.authorization.split(" ")[1];

  // Verify the token using the secret key
  jwt.verify(token, process.env.JWT_PRIVATE_KEY, (err, decodedToken) => {
    if (err) {
      console.log(token, err);
      // Return an error response if the token is invalid
      return res.status(401).json({ message: "Invalid token" });
    } else {
      // Add the decoded token to the request object and call the next middleware function
      req.decodedToken = decodedToken;
      next();
    }
  });
}

module.exports = validateToken;
