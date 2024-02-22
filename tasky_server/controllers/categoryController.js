const {Category} = require('../config/db');

const createCategory = async (req, res) => {
    const {name} = req.body;

    try {
        const existingCategory = await Category.findOne({where: {name, userID: req.userID}});
        if (existingCategory) {
            return res.status(400).send({message: 'Category already exists!'});
        }
        const category = await Category.create({
            name,
            userID: req.userID
        });
        res.status(200).send(category);
    }
    catch (err) {
        res.status(500).send({message: err.message});
    }
}

const getCategories = async (req, res) => {
    try {
        const categories = await Category.findAll({where: {userID: req.userID}});
        res.status(200).send(categories);
    }
    catch (err) {
        res.status(500).send({message: err.message});
    }
}

module.exports = {
    getCategories,
    createCategory
}