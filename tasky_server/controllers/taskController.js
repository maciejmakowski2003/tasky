const {Task} = require('../config/db'); 

const createTask = async (req, res) => {
    try {
        const {category, color, name, doItUntil} = req.body;
        const userID = req.userID;
        const task = await Task.create({category, color, name, doItUntil, userID});
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll({where: {userID: req.userID}});
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateTaskStatus =async (req, res) => {
    try {
        const {id} = req.params;
        const {done} = req.body;
        const task = await Task.update({done}, {where: {id, userID: req.userID}});
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