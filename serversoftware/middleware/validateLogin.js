// middleware/validateLogin.js
module.exports = function validateLogin(req, res, next) {
  const { emailOrUsername, password } = req.body;

  if (!emailOrUsername || !password) {
    return res.status(400).json({ message: "Both email/username and password are required." });
  }

  next();
};
