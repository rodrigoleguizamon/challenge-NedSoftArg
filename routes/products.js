var express = require('express');
var router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/* GET detail page. */
router.get('/detail/:id', productsController.detail)


module.exports = router;
