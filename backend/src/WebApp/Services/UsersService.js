const { UserBody, UserRegisterResponse } = require('../Models/User.js');
const UsersRepository = require('../../Infrastructure/PostgresSQL/Repository/UsersRepository.js');
const ServerError = require('../Models/ServerError.js');

const registerUser = async (user) => {
    const userBody = new UserBody(user)
    const res = await UsersRepository.addUser(userBody.name, userBody.email, userBody.password, userBody.phoneNumber);

    if (!res) {
        throw new ServerError('We can not register the user', 404);
    }
    
    return new UserRegisterResponse(res);
};

module.exports = {
    registerUser
}