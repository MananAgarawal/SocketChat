const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true,
        trim: true, 
    },
    Email: {
        type: String,
        required: true,
        unique: true, 
        trim: true,
        lowercase: true, 
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
    },
    Password: {
        type: String,
        required: true,
    },
});

const USERS = mongoose.model('User', userSchema);

module.exports = USERS;