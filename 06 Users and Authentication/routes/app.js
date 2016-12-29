var express = require('express');
var router = express.Router();

//keep app.js clean, only keep root route
router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;
