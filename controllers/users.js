const User = require('../models/user');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    console.log(SECRET);
    const token = createJWT(user);
    console.log(token);
    res.json({ token });
  } catch (err) {
    res.status(400).json(err);
  }
}

function createJWT(user) {
  return jwt.sign(
    {user},
    SECRET,
    {expiresIn: '24h'}
  );
}

module.exports = {
  signup,
  // login
}