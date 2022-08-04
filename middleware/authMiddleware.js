const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const Users = require('../models/usersSchema')

const protect = asyncHandler(async (req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await Users.findById(decoded.id).select('-Password')
            next()
        } catch (error) {
            res.status(401)
            throw new Error('Not Authorized')
        }
    }
    if (!token) {
        res.status(401)
        throw new Error('Not Authorized, No Token')
    }
})

module.exports = { protect }