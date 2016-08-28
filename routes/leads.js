var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hr-ops');

var Lead = mongoose.model('Lead', { user: String, skills: String });

router.get('/search', function(req, res) {
    var query = req.query.query;
    var regex = new RegExp(query, "i");

    Lead.find({
        $or: [{ 'user': regex }, { 'skills': regex }]
    }, function(err, leads) {
        if (err) {
            res.send(err);
        } else {
            res.json(leads);
        }
    });
});

module.exports = router;
