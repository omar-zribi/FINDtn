const express = require("express");
const {userSignUp, loginUser, getOneUser, getAllUsers, deleteUser, updateUser, verifyActivationCompte}=require('../controllers/user.controllers');
const {userSingUpAuth}=require('../middleware/User.auth.middleware')
const { userSingUpRules, userSingUpdValidator } = require("../middleware/User.validator.middleware");

router = express.Router();

router.post("/signup", userSingUpRules(), userSingUpdValidator, userSignUp);
router.post("/login",loginUser);
router.post("/activation/:userName",verifyActivationCompte);
router.get("/get/:userName",getOneUser,userSingUpAuth);
router.get("/getall",getAllUsers); 
router.delete("/delete/:userName",deleteUser);
router.put("/update/:userName",updateUser);

module.exports=router