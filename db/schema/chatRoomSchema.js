const  mongoos=require('mongoose');


const chatroom=mongoos.Schema({
    
    userIds:{
        type:Array,
        required:true,
    },
    isblocked:{
        type:Boolean,
        default:false,
    },
    blockedBy:{
        type:String,
        default:'',
    },
    
},    {timestamps: true}
);

module.exports=mongoos.model('chatRooms',chatroom);