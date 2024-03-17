const express = require("express")
const router = express.Router()
const registercntrl = require('../Controllers/users')

router.post('/signup',registercntrl.signup)
router.post('/signin',registercntrl.signin)
// router.post('/forgetpwd',registercntrl.forgetpwd)

module.exports = router;