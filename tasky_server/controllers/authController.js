const {User} = require('../config/db');
const {secretKey} = require('../config/auth');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const maxAge = 3 * 24 * 60 * 60;

const createToken = (user) => {
    return jwt.sign({id: user.id}, secretKey, {
        expiresIn: maxAge
    });
};

const signup = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.create({
            email,
            password: bcrypt.hashSync(password, 8)
        });
        const token = createToken(user);
        res.status(200).send({ 
            token: token
        })
    }
    catch (err) {
        res.status(500).send({message: err.message});
    }
}

const login = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({where: {email: email}});
        
        if (!user) {
            return res.status(404).send({message: 'User not found!'});
        }

        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if(!passwordIsValid){
            return res.status(401).send({message: 'Invalid password!'});
        }

        const token = createToken(user);
        res.status(200).send({
            token: token
        });
    } 
    catch (err) {
        res.status(500).send({message: err.message});
    }
}

const verifyUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.userID);

        if (!user) {
            return res.status(404).send({message: 'User not found!'});
        }

        res.status(200).send({
            email: user.email,
            photo: user.photo
        });
    }
    catch (err) {
        res.status(500).send({message: err.message});
    }    
}

const changePassword = async (req, res) => {
    const {oldPassword, newPassword} = req.body;

    try {
        const user = await User.findByPk(req.userID);

        if (!user) {
            return res.status(404).send({message: 'User not found!'});
        }

        const passwordIsValid = bcrypt.compareSync(oldPassword, user.password);
        if(!passwordIsValid){
            return res.status(401).send({message: 'Invalid password!'});
        }

        user.password = bcrypt.hashSync(newPassword, 8);
        user.save();

        res.status(200).send({message: 'Password is changed!'});
    }
    catch (err) {
        res.status(500).send({message: err.message});
    }
}

const changePhoto = async (req, res) => {
    const {photo} = req.body;

    try {
        const user = User.findByPk(req.userID);

        if (!user) {
            return res.status(404).send({message: 'User not found!'});
        }

        user.photo = photo;
        user.save();

        res.status(200).send({message: 'Photo is changed!'});
    }
    catch (err) {
        res.status(500).send({message: err.message});
    }
}

module.exports = {
    signup,
    login,
    verifyUser,
    changePassword,
    changePhoto
};





