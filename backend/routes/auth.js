const User = require('./models/User')
const router = require("express").Router()
const bycrpt = require("bycrypt")

//Register
router.post('register', async (req, res) => {
    try {
        const salt = await bycrpt.genSalt(10)
        const hashedPass = await bycrpt.hash(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass
        })

        const user = await newUser.save()
        res.status(200).json(user)
    }   catch(error){
        res.status(500).json(error)
    }
})