const mongoos = require('mongoose')

const User = mongoos.Schema({
    firstName: {
        type: String,
        trim: true,
        required: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    userName: {
        type: String,
        trim: true,
        required: true,
        index: true,
        unique: true,
        sparse: true,
    },
    email: {
        type: String,
        trim: true,
        index: true,
        unique: true,
        sparse: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    createAt: {
        type: Date,
        defualt: Date.now,
    },
    updateAt: {
        type: Date,
    }

});
module.exports = mongoos.model('user', User);