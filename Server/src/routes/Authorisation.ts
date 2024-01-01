const express = require('express');
const router = express.Router();
const { userlogin , usersignup , tokenauth} = require('../controllers/Authorisation')

router.post("/",tokenauth);
router.post("/login", userlogin);
router.post("/signup", usersignup);

module.exports = router;