
const express = require('express');
const { signup,login,dashboard,roleCheck } = require('../controllers/userController');
const { jwtAuthentication } = require('../middleware/jwtAuthentication');
const security=require('../middleware/security');
const helmet = require('helmet');

const router = express.Router(); 
router.use(express.json()); 
router.use(helmet());
router.use(security.setHeaders);


const routerControl = () => {

    router.post('/signup', signup);
    router.post('/login',login);
    router.get('/dashboard',jwtAuthentication,dashboard);
    router.post('/admin',roleCheck);
}

routerControl(); 

module.exports = router; 
