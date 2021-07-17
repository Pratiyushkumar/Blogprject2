const router = require("express").Router();
const  User = require("../models/User");
const bcrypt = require("bcrypt");


// Register
router.post("/register", async (req, res)=>{
        try{
            
            const salt = await bcrypt.genSalt(10);
            const hashedPwd = await bcrypt.hash(req.body.password, salt);
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: hashedPwd,
            });

            const user = await newUser.save();
            res.status(200).json(user);
            console.log(user);
        }
        catch(err){
            res.status(500).json(err);
            console.log(err);
        }
});

// LOGIN

router.post("/login", async (req, res)=>{
    try{
        // const user = await User.findOne({username: req.body.username});
        // !user && res.status(400).json("Wrong credentials");

        // const validated = await bcrypt.compare(req.body.password, user.password)
        // !validated && res.status(400).json("wrong credentials")

        // const {password, ...notSee} = user._doc
        // res.status(200).json(notSee)
        const user = await User.findOne({username: req.body.username});
        const validated = await bcrypt.compare(req.body.password, user.password)
        if(!user || !validated) res.status(400).json("Wrong credentials");
        else {
            const {password, ...notSee} = user._doc
            res.status(200).json(notSee)
            }
    }
    catch(err){
        console.log("LOGIN ERROR",err);
        res.status(500).send(err)
    }
})




module.exports = router;