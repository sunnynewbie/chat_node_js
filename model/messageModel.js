const MessgeModel=require('./../db/schema/messageSchema');


function sendMessage(req,res){
  return  new Promise((resolve,reject)=>{

        try {
           // MessgeModel.create();
           resolve(req.body);
        } catch (error) {
            console.log(error);
            reject(error);
        }

    });
}

module.exports={
    sendMessage:sendMessage,
}