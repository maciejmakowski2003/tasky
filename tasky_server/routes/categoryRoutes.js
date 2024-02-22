const {Router} = require('express');
const verifyToken = require('../middleware/verifyToken');
const {getCategories, createCategory} = require('../controllers/categoryController');

const router = Router();

router.get('/api/categories', verifyToken, getCategories);
router.post('/api/add-category', verifyToken, createCategory);

module.exports = router;