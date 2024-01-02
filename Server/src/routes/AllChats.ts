const express = require('express')
const router = express.Router();
const { auth } = require('../middlewares/Tokenauth')
const { GetAllTheChats } = require('../controllers/AllChats')
router.get('/', auth , GetAllTheChats);

module.exports = router;