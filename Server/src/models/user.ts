const mongoose = require('mongoose');

const user = new mongoose.Schema({
    Username: String,
    Email: String,
    Password: String,
})


const USERS = mongoose.model('users',user);

module.exports = USERS;
