const mongoos=require('mongoose')

mongoos.connect('mongodb://127.0.0.1:27017',{
    useNewUrlParser: true,

},(err)=>{

    if (err) {
        console.log(err);
    }else{
        console.log(`database connected`);
    }
});

module.exports=mongoos;