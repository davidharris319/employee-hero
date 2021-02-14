var Org = require('../models/org');
var User = require('../models/user');
const { createJWT } = require('../config/jwt.js');


async function create(req, res) {
  const org = new Org(req.body);
  try {
    const organization = await org.save();
    const user = await User.findById(req.user._id)
    user.organization = organization;
    await user.save();
    const token = createJWT(user);
    res.json({user, organization, token});
  } catch (err) {
    console.log(err)
    res.json({"test": "fail"});
  }
}

async function show(req, res) {
  const organization = await Org.findById(req.user.organization);
  res.status(200).json(organization);
}

async function index(req, res) {
  const organizations = await Org.find({});
  res.status(200).json(organizations);
}

module.exports = {
  create,
  show,
  index
};