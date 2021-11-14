const Router = require('express')();

const UsersController = require('./UsersController');

Router.use('/users', UsersController);

module.exports = Router;