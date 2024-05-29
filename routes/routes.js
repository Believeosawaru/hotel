const express = require('express');
const { homeController } = require('../controllers/controllers');

const route = express.Router();

route.get('/', homeController);

module.exports = route;