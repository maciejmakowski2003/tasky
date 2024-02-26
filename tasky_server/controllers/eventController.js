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

const getEvents = async (req, res) => {
    try {
        const userID = req.userID;
        const events = await Event.findAll({where: {userID}});
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deleteEvent = async (req, res) => {
    try {
        const {id} = req.params;
        const userID = req.userID;
        const event = await Event.findOne({where: {id, userID}});
        if (!event) {
            return res.status(404).json({message: 'Event not found'});
        }
        await event.destroy();
        res.status(200).json({message: 'Event deleted'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}



module.exports = {
    createEvent,
    getEvents,
    deleteEvent
}