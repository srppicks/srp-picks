// The following error prevention is appropriate because
// the functions are provided by knex itself.
/* eslint func-names: ["error", "never"] */
exports.up = function(knex) {
  return knex.schema.createTable("Golfer", table => {
    table.increments("id").primary();
    table.string("name");
    table.string("height");
    table.integer("weight");
    table.string("hometown");
    table.string("birthday");

  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Golfer");
};
