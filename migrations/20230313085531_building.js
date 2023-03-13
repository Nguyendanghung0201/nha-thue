
exports.up = function(knex) {
    return knex.schema.hasTable('building').then(exists => {
        if (!exists) {
            return knex.schema.createTable('building', table => {
                table.increments('id');
                table.string('name', 255).notNullable();
                table.text('address').notNullable();
                table.string('line', 255).nullable();
                table.string('infor', 255).nullable();
                table.string('phone', 255).nullable();
                table.text('images').nullable();
                table.text('pdf').nullable();
                table.timestamp('created_at').defaultTo(knex.fn.now());
                table.timestamp('updated_at').defaultTo(knex.fn.now());
            });
        }
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('building');
};
