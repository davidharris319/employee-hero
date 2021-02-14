const express = require('express');
const router = express.Router();
const orgsCtrl = require('../../controllers/orgs');
const employeesCtrl = require('../../controllers/employees');

router.post('/create', checkAuth, orgsCtrl.create);
router.get('/show', checkAuth, orgsCtrl.show);
router.get('/', orgsCtrl.index);
router.post('/register-employee', employeesCtrl.registerToOrganization);


/*--------- Helper Functions ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;