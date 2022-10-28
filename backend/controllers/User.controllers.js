const User = require('../model/User');
const bc = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const nodemailer = require('nodemailer');
const secret = config.get("secret");
const user = config.get("user");
const pass = config.get("pass");
const host = config.get("host");
const port = config.get("port");

// to sign-up User
exports.userSignUp = async (req, res) => {
    const { userName, userSex, email, etabOrigin, gouvernerat, posteAcctuel, password } = req.body;
    try {
        const theEmail = await User.findOne({ email });
        // const theUserName = await User.findOne({ userName });
        if (theEmail) { res.status(401).json({ msg: " this email already exist" }); }
        // if (theUserName) {

        // }
        const newUser = new 
        User({ userName, userSex, email, etabOrigin, gouvernerat, posteAcctuel, password });
        const rand = (Math.floor(Math.random() * (1500 - 15 + 1) + 15)).toString();
        const codeActivation = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
        newUser.activationCode = codeActivation;
        newUser.userName = `${req.body.userName}${rand}`;
        const salt = await bc.genSalt(10);
        const hash = bc.hashSync(password, salt);
        newUser.password = hash;
        await newUser.save();

        var transporter = nodemailer.createTransport({
            host: host,
            port: port,
            secure:false,
            auth: {
            user: user,
            pass: pass
            }
            });
            var mailOptions = {
            from: user,
            to: newUser.email,
            subject: 'activation compte',
            text: ` cher ${newUser.userName} votre code d'activation est ${newUser.activationCode}`};
            
            transporter.sendMail(mailOptions, function (error) {
                (error)
                ?
                (res.status(500).json({ msg: error.message }))
                :
                (res.status(201).json({
                    PublicMsg: {
                        subject: `from public contact form`,
                        fullName: newPublicMsg.fullName,
                        email: newPublicMsg.email,
                        company:newPublicMsg.company,
                        message:newPublicMsg.message
                    }}))});     
        const payload = {
            id: newUser._id,
            userName: newUser.userName,
            role: newUser.role,
        };
        const token = jwt.sign(payload, secret);
        res.status(201).json({
            msg: "User created successfully",
            token,
            user: {
                id: newUser._id,
                userName: newUser.userName,
                userSex: newUser.userSex,
                email: newUser.email,
                etabOrigin: newUser.etabOrigin,
                gouvernerat: newUser.gouvernerat,
                posteAcctuel: newUser.posteAcctuel,
                password: newUser.password,
                role: newUser.role,
                isActive:newUser.isActive,
                activationCode: newUser.activationCode,
            },
        });
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
//to get all users
exports.getAllUsers = async (req, res) => {
    try {
        const allUser = await User.find();
        if (allUser) {
            res.status(201).json({
                msg: "All users",
                user: ({ allUser })
            });
        }
    } catch (error) {
        res.status(500).json({ msg: "something went wrong" }).send({ msg: error.message })
    }
};
//to get one user
exports.getOneUser = async (req, res) => {
    try {
        const oneUser = await User.findOne(req.params.userName);
        if (oneUser) {
            res.status(201).json({
                msg: "User profile",
                token,
                user: {
                    id: oneUser._id,
                    userName: oneUser.userName,
                    userSex: oneUser.userSex,
                    email: oneUser.email,
                    etabOrigin: oneUser.etabOrigin,
                    gouvernerat: oneUser.gouvernerat,
                    posteAcctuel: oneUser.posteAcctuel,
                    password: oneUser.password,
                    role: oneUser.role
                },
            });
        }
    } catch (error) {
        res.status(500).json({ msg: "something went wrong" }).send({ msg: error.message });
    }
};
//update user
exports.updateUser = async (req, res) => {
    const { userName, userSex, email, etabOrigin, gouvernerat, posteAcctuel, password } = req.body;
    try {
        const updateUser = await User.findOneAndUpdate(req.params.userName, { ...req.body }, { new: true });
        if (updateUser) {
            const salt = await bc.genSalt(10);
            const hash = bc.hashSync(password, salt);
            updateUser.password = hash;
            await updateUser.save();
            const payload = {
                id: updateUser._id,
                userName: updateUser.userName,
                role: updateUser.role,
            };
            const token = jwt.sign(payload, secret);
            res.status(201).json({
                msg: "User created successfully",
                token,
                user: {
                    id: updateUser._id,
                    userName: updateUser.userName,
                    userSex: updateUser.userSex,
                    email: updateUser.email,
                    etabOrigin: updateUser.etabOrigin,
                    gouvernerat: updateUser.gouvernerat,
                    posteAcctuel: updateUser.posteAcctuel,
                    password: updateUser.password,
                    role: updateUser.role
                },
            });
        }
    } catch (error) {
        res.status(500).json({ msg: "something went wrong" }).send({ msg: error.message });
    }
};
//delete one User
exports.deleteUser = async (req, res) => {
    try {
        const theUser = await User.findOneAndDelete(req.params.userName);
        // if (!theUser){res.status(401).json({ msg: "User not found" })}
        // else {
        // theUser = await User.deleteOne();
        res.status(201).json({ msg: "User deleted successfully" })
            
    } catch (error) {
        res.status(500).json({ msg: "something went wrong" }).send({ msg: error.message });
    }
};
//login user
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const theUser = await User.findOne({ email });
        if (!theUser) { res.status(401).json({ msg: " invalid email or password" }) }
        const isMatch = await bc.compare(password, theUser.password)
        if (!isMatch) { res.status(401).json({ msg: " invalid email or password" }) }
        if (theUser && isMatch && (theUser.isActive===false)) {
            res.status(401).json({ msg: " veuillez verifier votre boite mail pour activer votre compte" })
        } else if (theUser && isMatch && (theUser.isActive===true)) {
        const payload = {
            id: theUser._id,
            userName: theUser.userName,
            role: theUser.role,
        };
        const token = jwt.sign(payload, secret);
        res.status(203).json({
            token,
            user: {
                id: theUser._id,
                userName: theUser.userName,
                userSex: theUser.userSex,
                email: theUser.email,
                etabOrigin: theUser.etabOrigin,
                gouvernerat: theUser.gouvernerat,
                posteAcctuel: theUser.posteAcctuel,
                password: theUser.password,
                isActive: theUser.isActive,
                activationCode: theUser.activationCode,
                role: theUser.role
            },
        })}
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
exports.verifyActivationCompte= async (req, res) => {
    const {activationCode} = req.body;
    const userName=req.params.userName;
    try {
        const theUser = await User.findOne({ userName });
        (theUser.activationCode===activationCode)?(theUser.isActive = true):(theUser.isActive = false)
        await theUser.save()
        const payload = {
            id: theUser._id,
            userName: theUser.userName,
            role: theUser.role,
        };
        const token = jwt.sign(payload, secret);
        res.status(203).json({
            token,
            user: {
                id: theUser._id,
                userName: theUser.userName,
                userSex: theUser.userSex,
                email: theUser.email,
                etabOrigin: theUser.etabOrigin,
                gouvernerat: theUser.gouvernerat,
                posteAcctuel: theUser.posteAcctuel,
                password: theUser.password,
                isActive: theUser.isActive,
                activationCode: theUser.activationCode,
                role: theUser.role
            },
        })
     } catch  (error) {
        res.status(500).json({ msg: error.message })
    }}