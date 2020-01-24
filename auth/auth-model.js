const bcrypt = require('bcryptjs');
const db = require('../data/db-config');

function findBy(filter){

    return db('users')
        .where(filter)
        .select("id", "username", "password", "department");
}


module.exports = {
    
    findBy,
    
}

