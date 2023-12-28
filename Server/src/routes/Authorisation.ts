const express = require('express');
const router = express.Router();
const { userlogin , usersignup} = require('../controllers/Authorisation')


router.post("/login", userlogin);
router.post("/signup", usersignup);

module.exports = router;