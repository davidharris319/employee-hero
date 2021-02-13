var Org = require('../models/org');


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