const {Event} = require('../config/db');

const createEvent = async (req, res) => {
    try {
        const {eventName, from, to} = req.body;
        const userID = req.userID;
        const event = await Event.create({name: eventName, from, to, userID});
        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    createEvent
}