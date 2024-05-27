const express =require('express');
const { loginController,registerController,checkUser } =require('./../controllers/userController');
const router = express.Router();

//routes
//Method =get
router.post('/login',loginController);


//Method -post

router.post('/register',registerController)
//Method -check
router.post('/check',checkUser)

module.exports =router;