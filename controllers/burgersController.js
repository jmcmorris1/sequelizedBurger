var express = require('express');
var router = express.Router();
//var models = require('../models/burgers.js');
var models = require('../models');

router.get('/', function (req, res) {
    //console.log("req = "+req);
    res.redirect('/burger');
});




router.get('/burger', function (req, res) {
    models.burgers.findAll().then(function(data){
        res.render('index', {burger : data});
    });
});

router.put('/burger/eaten/:id', function(req, res){
    var burgerID = req.params.id;
    models.burgers.update({devoured : true},{where: {id: burgerID}}).then(function(){
        res.redirect('/burger');
    });
});

router.post('/burger/create', function (req, res) {
    models.burgers.create({
        burgerName: req.body.name,
        devoured: false})
        .then(function () {
        res.redirect('/burger');
    });
});


module.exports = router;