const userModel = require('./../db/schema/userSchema');
const encrypt = require('bcryptjs');
const e = require('express');


function createUser(req, res) {
    return new Promise(async (resolve, reject) => {

        try {
            var reqestaData = req.body;
            reqestaData.password = encrypt.hashSync(req.body.password, 10);
            var result = await userModel.create(reqestaData);

             resolve(result);
        } catch (error) {
            reject(error);
        }



    });
}

function getuser(req, res) {
    return new Promise(async (resolve, reject) => {

        try {
            var result = await userModel.findOne({ email: req.body.email },'firstName lastName userName email _id password');
            if(!result){
                reject("No user found");
            }
            var match =encrypt.compareSync(req.body.password,result.password);
            if(match){
                result.password="";
                resolve(result);
            }else{
                reject("password not matched");
            }
        } catch (error) {
            console.log(error);
            reject(error);

        }
    });
}

module.exports = {
    signUpuser: createUser,
    loginUser: getuser
}
