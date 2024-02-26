const {Router} = require('express');
const verifyToken = require('../middleware/verifyToken');
const {createEvent, getEvents, deleteEvent} = require('../controllers/eventController');

const router = Router();

router.get('/api/events', verifyToken, getEvents);
router.post('/api/add-event', verifyToken, createEvent);
router.delete('/api/delete-event/:id', verifyToken, deleteEvent);


module.exports = router;