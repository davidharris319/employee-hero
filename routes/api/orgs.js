const express = require('express');
const router = express.Router();
const orgsCtrl = require('../../controllers/orgs');

router.post('/organization-page', orgsCtrl.create);

module.exports = router;