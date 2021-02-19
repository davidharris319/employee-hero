const express = require('express');
const router = express.Router();
const answersCtrl = require('../../controllers/answers');

router.post('/create', answersCtrl.create);
router.get('/', answersCtrl.index);
router.put('/:id', answersCtrl.update);


/*--------- Helper Functions ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;