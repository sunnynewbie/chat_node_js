const { signUpuser, loginUser } = require("../model/userModel")

exports.signUp = (req, res, next) => {
    signUpuser(req, res).then(result => {

        return res.status(200).send({message:'user created successfully'});
    }).catch(err => {
        return res.status(400).send({error:err});
    });
}

exports.logIn=(req,res,next)=>{

    loginUser(req,res)
    .then(result=>{
        return res.status(200).send({message:'login success',user:result});

    })
    .catch(err=>{
return res.status(400).send({message:'login error',status:err});
        
    });
}