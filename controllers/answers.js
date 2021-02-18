var Answer = require('../models/answer');
var Question = require('../models/question');
var Org = require('../models/org');


async function create(req, res) {
  try {
    const answer = new Answer(req.body);
    console.log(req);
    const question = await Question.findById(req.user.organization);
    const org = await Org.findById(req.user.organization);
    
    answer.question = question
    answer.organization = org;
    await answer.save();

    res.json({answer});
  } catch (err) {
    console.log(err)
    res.json(err);
  }
}

module.exports = {
  create,
}