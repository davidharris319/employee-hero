const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

function createJWT(user) {
  return jwt.sign(
    {user},
    SECRET,
    {expiresIn: '24h'}
  );
}

module.exports = {
  createJWT
}