const express = require('express');
const router = express.Router();
const orgsCtrl = require('../../controllers/orgs');

router.post('/organization-page', checkAuth, orgsCtrl.create);

/*--------- Helper Functions ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;