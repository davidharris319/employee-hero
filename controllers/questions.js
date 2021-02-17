var Org = require('../models/org');
var Question = require('../models/question');
const { createJWT } = require('../config/jwt.js');

async function create(req, res) {
  try {
    const question = new Question(req.body);
    const org = await Org.findById(req.user.organization);
    question.organization = org;
    await question.save();
    const token = createJWT(user);
    res.json({user, question});
  } catch (err) {
    console.log(err)
    res.json({"test": "fail"});
  }
}


module.exports = {
  create
}