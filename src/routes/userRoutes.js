
const express = require('express');
const { signup,login,dashboard,roleCheck } = require('../controllers/userController');
const { jwtAuthentication } = require('../middleware/jwtAuthentication');

const router = express.Router(); 
router.use(express.json()); 


const routerControl = () => {

    router.post('/signup', signup);
    router.post('/login',login);
    router.get('/dashboard',jwtAuthentication,dashboard);
    router.post('/admin',roleCheck)
}

routerControl();
module.exports = router; 
