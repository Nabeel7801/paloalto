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

module.exports = router