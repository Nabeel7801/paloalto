const express = require("express");
const router = express.Router();
const Sessions = require("../models/sessionsSchema")

router.get('/getSessions', (req, res) => {
    Sessions.find()
        .then(sessions => {
            res.json(sessions); 
        })
        .catch(err => res.status(400).json({ error: err }))
})

router.post('/createSession', (req, res) => {

    const newSession = new Sessions(req.body);

    newSession.save()
        .then((data) => { res.json({...data, status: "success" }) })

})

router.get('/getParticipants/:sessionID', (req, res) => {
    Sessions.findOne({_id: req.params.sessionID})
        .then(session => {
            if (session) {
                res.json(session.Participants); 
            } else {
                res.json({status: 'error'})
            }
        })
        .catch(err => res.status(400).json({ error: err }))
})

router.put('/addParticipant/:sessionID', (req, res) => {
    Sessions.findByIdAndUpdate(req.params.sessionID, { $push: { Participants: req.body }})
        .then(() => res.json({status: 'success'}))
        .catch(err => res.status(400).json("Error: " + err))

})

router.put('/removeParticipant/:sessionID', (req, res) => {
    Sessions.findByIdAndUpdate(req.params.sessionID, { Participants: req.body })
        .then(() => res.json({status: 'success'}))
        .catch(err => res.status(400).json("Error: " + err))

})

module.exports = router