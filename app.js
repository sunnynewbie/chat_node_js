const express=require('express')
const  cors=require('cors')
const bodyparser=require('body-parser');
const userRoute = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');

const app= express();


app.use(cors());
app.unsubscribe(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(express.static('./public'))
app.use('/user',userRoute);
app.use('/chat',chatRoutes);

module.exports=app;