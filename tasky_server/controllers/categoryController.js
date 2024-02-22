const {Category} = require('../config/db');

const createCategory = async (req, res) => {
    const {name, color} = req.body;

    try {
        const existingCategory = await Category.findOne({where: {name: name.toLowerCase(), userID: req.userID}});
        if (existingCategory) {
            return res.status(400).send({message: 'Category already exists!'});
        }
        const category = await Category.create({
            name: name.toLowerCase(),
            color,
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

const removeCategory = async (req, res) => {
    const {name} = req.body;
    try {
        const category = await Category.findOne({where: {name, userID: req.userID}});
        if (!category) {
            return res.status(404).send({message: 'Category not found!'});
        }
        await category.destroy();
        res.status(200).send({message: 'Category removed!'});
    }
    catch (err) {
        res.status(500).send({message: err.message});
    }
}

module.exports = {
    getCategories,
    createCategory,
    removeCategory
}