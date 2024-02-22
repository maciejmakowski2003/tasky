const {Router} = require('express');
const verifyToken = require('../middleware/verifyToken');
const {getCategories, createCategory, removeCategory} = require('../controllers/categoryController');

const router = Router();

router.get('/api/categories', verifyToken, getCategories);
router.post('/api/add-category', verifyToken, createCategory);
router.delete('/api/remove-category', verifyToken, removeCategory);

module.exports = router;