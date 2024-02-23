const {Task, Category} = require('../config/db'); 


const createTask = async (req, res) => {
    try {
        const {categoryName, taskName, date} = req.body;
        const userID = req.userID;
        const category = await Category.findOne({where: {name: categoryName, userID}});
        const doItUntil = new Date(date);
        
        const task = await Task.create({categoryID: category.id, name: taskName, doItUntil, userID});
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll({where: {userID: req.userID}});
        const tasksArray = [];
        for (let task of tasks) {
            const category = await Category.findOne({where: {id: task.categoryID}});
            tasksArray.push({
                id: task.id,
                name: task.name,
                doItUntil: task.doItUntil,
                done: task.done,
                category: category.name,
                color: category.color
            });
        }
        res.status(200).json(tasksArray);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateTaskStatus = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findOne({where: {id, userID: req.userID}});
        task.update({done: !task.done})
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        await Task.destroy({where: {id, userID: req.userID}});
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    createTask,
    getTasks,
    updateTaskStatus,
    deleteTask
}