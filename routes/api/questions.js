const express = require('express');
const router = express.Router();
const questionsCtrl = require('../../controllers/questions');

router.post('/create', questionsCtrl.create);


/*--------- Helper Functions ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;