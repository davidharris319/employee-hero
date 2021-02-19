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

module.exports = {
  create,
}