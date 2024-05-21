
const express = require('express');
const { signup,login,dashboard,roleCheck } = require('../controllers/userController');
const { jwtAuthentication } = require('../middleware/jwtAuthentication');

const router = express.Router(); // Create the router instance here
router.use(express.json()); // Add the JSON middleware to the router


const routerControl = () => {

    router.post('/signup', signup);
    router.post('/login',login);
    router.get('/dashboard',jwtAuthentication,dashboard);
    router.post('/admin',roleCheck);
}

routerControl(); // Call the routerControl function to set up routes

module.exports = router; // Export the router instance
