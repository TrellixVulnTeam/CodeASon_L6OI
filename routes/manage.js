const express = require('express');
const upload = require('../ultil/upload');
const router = express.Router();

const manageController = require('../app/controller/ManageController');

router.get('/stored/product', manageController.manage);

router.get('/stored/trash', manageController.trash);

module.exports = router;