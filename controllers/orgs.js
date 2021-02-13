var Org = require('../models/org');
var User = require('../models/user');


async function create(req, res) {
  const org = new Org(req.body);

  try {
    await org.save();
    const user = await User.findById(req.user._id)
    user.organization = org;
    await user.save();
    res.redirect('/organization-page');
  } catch (err) {
    res.json({err});
  }
}



module.exports = {
  create
};