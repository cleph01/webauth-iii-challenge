
exports.up = async function(knex) {
    
    await knex.schema.dropTableIfExists("users");
  
    await knex.schema.createTable("users", (table) =>{
        // translates to "id" INTEGER NOT NULL UNIQUE PRIMARY KEY AUTOINCREMENT
        table.increments("id"); //Short hand for above
        table.text("username").notNull();
        table.text("password").notNull();
        table.text("department").notNull();
        
    });

};

exports.down = async function(knex) {
  
    await knex.schema.dropTableIfExists("users");
};
