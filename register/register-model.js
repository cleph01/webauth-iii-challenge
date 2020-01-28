const bcrypt = require('bcryptjs');

const db = require('../data/db-config');

async function addUser(user){

    user.password = await bcrypt.hash(user.password, 2)

    const [id] = await db('users')
                    .insert(user)

    return findById(id);
}

function findById(id){

    return db('users')
        .where( { id } )
        .first( "id", "username");
}



module.exports = {
    
    addUser,
    findById,

}

