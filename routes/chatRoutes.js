const chatRoutes=require('express').Router();

const chatcontroller=require('./../controller/chatController');


chatRoutes.post('/createRoom',chatcontroller.creatroom);
chatRoutes.post('/sendMessage',chatcontroller.sendmessage);

module.exports=chatRoutes;