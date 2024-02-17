const {Router} = require('express'); 
const verifyToken = require('../middleware/verifyToken');
const {signup, login, verifyUser, changePassword, changePhoto} = require('../controllers/authController');

const router = Router();

router.get('/api/auth/verify-user', verifyToken, verifyUser);
router.post('/api/auth/signup', signup);
router.post('/api/auth/login', login);
router.put('/api/auth/change-password', verifyToken, changePassword);
//router.put('/api/auth/change-photo', verifyToken, changePhoto); TODO

module.exports = router;