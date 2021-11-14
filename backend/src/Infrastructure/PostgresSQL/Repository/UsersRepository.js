const { queryAsync } = require('..');

const addUser = async (name, email, password, phoneNUmber) => {
    console.info(`Adding user ${name}`);

    const users = await queryAsync(`
        INSERT INTO customers(name, email, password, phoneNumber)
        VALUES ($1, $2, $3, $4) RETURNING id, name`, [name, email, password, phoneNUmber]);
        
    return users[0];
}

module.exports = {
    addUser
}