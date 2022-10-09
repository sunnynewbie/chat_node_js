const { createChatRoom } = require("../model/chatroomModel");
const { sendMessage } = require("../model/messageModel");

exports.creatroom = (req, res, next) => {
    createChatRoom(req, res)
        .then(result => {
            return res.status(200)
                .send({ data: result });
        })
        .catch(err => {

            return res.status(400)
                .send({ error: err });
        })
}

exports.sendmessage = (req, res, next) => {
    sendMessage(req,res)
    .then(result=>{
       return res.status(200).send({data:result});

    })
    .catch(err=>{
        return res.status(400).send({error:err});

    });
    
}