require('../config/Database');

const userRegistration = require('../repository/user/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    const { name, email, password,roles } = req.body;

    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const addUser = await userRegistration.create({
            name: name,
            email: email,
            password: hashedPassword,
            roles: roles,
        });

        console.log(addUser);
        res.status(201).send(addUser);
    } catch (error) {
        console.error(error);
        res.status(400).send('Error creating user: ' + error.message);
    }
};

const login = async (req, res) => {
    const { name, password } = req.body;

    try {
        const user = await userRegistration.findOne({ name: name });

        if (!user) {
            return res.status(400).send('Username is incorrect');
        }

        const validatePassword = await bcrypt.compare(password, user.password);

        if (!validatePassword) {
            return res.status(400).send('Invalid password');
        }

        const token = jwt.sign({ _id: user._id }, "tuhin");
        res.header('authtoken', token).send({ token: token });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error logging in: ' + error.message);
    }
};

const dashboard=(req,res)=>{
    res.send(`welcome to dashboard`)

}

const roleCheck=async(req,res)=>{
    const {name,password}=req.body;
    try{
        const user=await userRegistration.findOne({name});
        if(!user)
       return res.status(404).send("User not found");

        const passCheck=await bcrypt.compare(password,user.password);
        if(!passCheck)
        return res.status(401).send("invalid password");
        
        if(user.roles!=='admin')
         return res.status(403).send('FORBIDDEN REQUEST! Not an ADMIN');
        
        return res.status(200).send('Welcome ADMIN');

    }catch(err){
        console.error(err);
        return res.status(500).send(`Error logging in: ${err.message}`);
    }
}

module.exports = { signup, login, dashboard,roleCheck };
