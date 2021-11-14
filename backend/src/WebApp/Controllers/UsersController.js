const express = require('express');

const ResponseFilter = require('../Filters/ResponseFilter.js');
const UsersService = require('../Services/UsersService.js')

const Router = express.Router();

Router.post('/register', async (req, res) => {
    const user = await UsersService.registerUser(req.body);

    ResponseFilter.setResponseDetails(res, 200, user)
});

module.exports = Router;