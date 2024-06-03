const express = require('express');
const { homeController, signUpController, logInController } = require('../controllers/controllers');

const route = express.Router();

route.get('/', homeController);

route.get('/sign-up', signUpController);

route.get('/log-in', logInController)

module.exports = route;