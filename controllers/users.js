const User = require('../models/user');

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
  }
} catch (err) {
  res.status(400).json(err);
}