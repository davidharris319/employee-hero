var Answer = require('../models/answer');
var Org = require('../models/org');
var User = require('../models/user');


async function create(req, res) {
  try {
    const answer = new Answer(req.body);
    const org = await Org.findById(req.user.organization);
    const user = await User.findById(req.user._id);
    answer.user = user;
    answer.organization = org;
    await answer.save();


    res.json({answer});
  } catch (err) {
    console.log(err)
    res.json(err);
  }
}

async function index(req, res) {
  const answers = await Answer.find({});
  res.status(200).json(answers);
}

async function update(req, res) {
  const updatedAnswer = await Answer.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedAnswer);
}

module.exports = {
  create,
  index,
  update,

}