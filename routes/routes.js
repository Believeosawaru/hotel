const express = require('express');
const { 
    homeController, 
    signUpController, 
    logInController, 
    bookingsController,
    reservationsController,
    profileController,
    paymentController,
    settingsController
    } = require('../controllers/controllers');

const route = express.Router();

route.get('/', homeController);

route.get('/sign-up', signUpController);

route.get('/log-in', logInController)

route.get('/bookings', bookingsController);

route.get('/reservation', reservationsController);

route.get('/profile', profileController);

route.get('/payment-methods', paymentController);

route.get('/settings', settingsController);


module.exports = route;