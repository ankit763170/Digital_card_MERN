const express = require('express');
const router = express.Router(); 


const authControllers = require('../controllers/AuthControllers');

router.get('/', authControllers.registration); 
router.post('/signup', authControllers.registration); 
router.post('/login', authControllers.login);
router.get('/userform', authControllers.userdata);

module.exports = router;
