const {Router} = require('express');
const verifyToken = require('../middleware/verifyToken');
const {createEvent} = require('../controllers/eventController');

const router = Router();

router.post('/api/add-event', verifyToken, createEvent);

module.exports = router;