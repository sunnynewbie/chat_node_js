const { boolean, bool } = require('joi');
const mongoose = require('mongoose');

const Messages = mongoose.Schema({
    chatId: {
        type: mongoose.Types.ObjectId,
    },
    message: {
        type: String,
        require: true,
        trim: true,
        minLength:1,
    },
    type: {
        type: String,
        require: true,
        minLength:1,
    },
    senderId: {
        type: mongoose.Types.ObjectId,
        require: true,
    },
    receiverId: {
        type: mongoose.Types.ObjectId,
        require: true,
    },
    readBy: {
        type: Array,
        default: [],
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    key: {
        type: String,
    },
    encrypted: {
        type: Boolean
    },
    chatId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"chatrooms"
    }
});

module.exports = mongoose.model('messages', Messages);