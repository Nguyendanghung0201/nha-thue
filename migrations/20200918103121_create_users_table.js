exports.up = function (knex) {
    return knex.schema.hasTable('users').then(exists => {
        if (!exists) {
            return knex.schema.createTable('users', table => {
                table.increments('Id');
                table.string('display_name', 255).notNullable();
                table.string('email', 255).unique().notNullable();
                table.string('password', 255).notNullable();
                table.string('phone', 20).unique().notNullable();
                table.string('ref', 255).unique().notNullable();
                table.text('address').nullable();
                table.string('avatar', 255).nullable();
                table.integer('level', 0).nullable();
                table.integer('status', 1).defaultTo(0);
                table.integer('gender', 1).nullable();
                table.text('find_raw').nullable();
                table.timestamp('created_at').defaultTo(knex.fn.now());
                table.timestamp('updated_at').defaultTo(knex.fn.now());
            });
        }
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('users');
};
