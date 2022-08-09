const express = require("express");
const router = express.Router();
const md5 = require("md5");
const jwt = require('jsonwebtoken')
const Users = require("../models/usersSchema")
const { protect } = require('../middleware/authMiddleware')


// Authenticate User
router.get('/authenticateUser/:email/:password', (req, res) => {
    const email= req.params.email
    const password = md5(req.params.password)
    
    Users.find({Email: email, Password: password})
        .then(user => res.json(user))
        .catch(err => res.status(400).json({ error: err }))
})

router.get('/getUserByEmail/:email', (req, res) => {
    Users.find({ Email: req.params.email })
    .then(users => {
        const user = {...users[0]}._doc;
        if (user) {
            delete user['_id'];
            delete user['Password'];
            delete user['Token'];
        }
        res.json(user); 
    })
    .catch(err => res.status(400).json({ error: err }))
})

router.get('/getUserCountByEmail/:email', (req, res) => {

    Users.find({ Email: req.params.email })
    .then(users => {
        res.json(users.length); 
    })
    .catch(err => res.status(400).json({ error: err }))
})

router.post('/registerUser', (req, res) => {

    const { FirstName, LastName, Email, Password } = req.body;
    const newUser = new Users({ FirstName: FirstName, LastName: LastName, Email: Email, Password: md5(Password), Token: generateToken(Email) });

    newUser.save()
        .then(() => { res.json({ status: "success" }) })

})


const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = router