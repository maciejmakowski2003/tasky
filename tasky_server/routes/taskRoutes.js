const {Router} = require('express');
const verifyToken = require('../middleware/verifyToken');
const {createTask, getTasks, updateTaskStatus, deleteTask} = require('../controllers/taskController');

const router = Router();

router.get('/api/tasks', verifyToken, getTasks); 
router.post('/api/add-task', verifyToken, createTask);
router.put('/api/tasks/update-status/:id', verifyToken, updateTaskStatus);
router.delete('/api/tasks/:id', verifyToken, deleteTask);

module.exports = router;