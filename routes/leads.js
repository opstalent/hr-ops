var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
mongoose.connect('mongodb://localhost:27017/hr-ops');

var LeadSchema = mongoose.Schema({
    user: String,
    skills: String,
    assigned: String,
    bookmark: String,
    comment: String,
    contact_date: String,
    contact_result: String,
    date: String,
    decision: String,
    decision_date: String,
    future_projects_decision: String,
    interview_date: String,
    lead_from: String,
    overall: String,
    reason: String,
    recruitment_decision: String,
    responce_till: String,
    second_contact: String,
    sent: String,
    source: String,
    technical_verification: String,
    name: String
});

LeadSchema.plugin(timestamps);
mongoose.model('Lead', LeadSchema);
var Lead = mongoose.model('Lead', LeadSchema)

router.get('/search', function(req, res) {
    var query = req.query.query;
    var regex = new RegExp(query, "i");

    Lead.find({
        $or: [{ 'user': regex }, { 'skills': regex }, { 'overall': regex }, { 'interview_date': regex }]
    }, function(err, leads) {
        if (err) {
            res.send(err);
        } else {
            res.json(leads);
        }
    });
});

// Get All leads
router.get('/leads', function(req, res, next) {
    Lead.find(function(err, leads) {
        if (err) {
            res.send(err);
        } else {
            res.json(leads);
        }
    });
});

// Get Single lead
router.get('/leads/:id', function(req, res, next) {
    Lead.findById(req.params.id,
        function(err, lead) {
            if (err) {
                res.send(err);
            } else {
                res.json(lead);
            }
        });
});

// // Save lead
router.post('/leads', function(req, res, next) {
    var lead = req.body;
    console.log(lead);
    if (!lead) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        Lead.create(lead, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        });
    }
}); 

// // Update lead
router.put('/leads/:id', function(req, res, next) {
    var lead = req.body;
    console.log(lead)
    Lead.update({ _id: req.params.id }, lead, {}, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    });

});

module.exports = router;