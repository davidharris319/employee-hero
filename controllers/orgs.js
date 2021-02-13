var Org = require('../models/org');
var Model = require('../models/user');


async function create(req, res) {
  try {
    await Org.create(req.body);

  } catch (err) {
    res.json({err});
  }
}



module.exports = {
  create
};