const fs = require('fs');

exports.seed = function (knex) {
    // Deletes ALL existing entries
    // return;
    return knex('country').del()
        .then(async function () {
            // Inserts seed entries
            const data = JSON.parse(fs.readFileSync(__dirname + '/../country.json', 'utf8'));
            return knex('country').insert(data);
        });
};
