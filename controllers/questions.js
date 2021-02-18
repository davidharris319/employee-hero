var Org = require('../models/org');
var Question = require('../models/question');

async function create(req, res) {
  try {
    const question = new Question(req.body);
    const org = await Org.findById(req.user.organization);
    
    question.organization = org;
    await question.save();

    res.json({question});
  } catch (err) {
    console.log(err)
    res.json(err);
  }
}

async function index(req, res) {
  const org = await Org.findById(req.user.organization);
  const questions = await Question.find({});
  res.status(200).json(questions);
}

async function deleteOne(req, res) {
  try {
    console.log('body', req.body)
    const deletedQuestion = await Question.findByIdAndRemove(req.body);
    res.status(200).json(deletedQuestion);
  } catch (err) {
    console.log(err)
    res.json(err);
  }
}

async function update(req, res) {
  const updatedQuestion = await Question.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedQuestion);
}

module.exports = {
  create,
  index,
  delete: deleteOne,
  update
}