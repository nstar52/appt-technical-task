const jwt = require('jsonwebtoken'),
      tokenSecret = "secretissecret";

module.exports = {

  // Generates a token from supplied payload
  issue(payload) {
    return jwt.sign(
      payload,
      tokenSecret,
      {
        expiresIn: "30 days"
      });
  },

  // Verifies token on a request
  verify(token, callback) {
    return jwt.verify(
      token,
      tokenSecret,
      {},
      callback 
    );
  }
};