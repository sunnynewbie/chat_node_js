const router=require('express').Router();
const userController=require('./../controller/userController');

router.post('/signUp',userController.signUp);
router.post('/logIn',userController.logIn);

module.exports=router;