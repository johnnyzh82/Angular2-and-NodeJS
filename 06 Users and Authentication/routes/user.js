var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');

var User = require('../models/user');

//password encryption/decryption using 3rd party lib
//npm install --save bcryptjs
router.post('/', function (req, res, next) {
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email
    });
    user.save(function(err, result){
        if(err){
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        //no need 'return' here, no code is executed after it
        res.status(201).json({
            message: 'User created',
            obj: result
        });
    });
});

module.exports = router;
