// The following error prevention is appropriate because
// the functions are provided by knex itself.
/* eslint func-names: ["error", "never"] */
exports.up = function(knex) {
  return knex.schema.createTable("Course", table => {
    table.increments("id").primary();
    table.string("pgaId");
    table.string("name");
    table.integer("schedule2018");
    table.integer("schedule2019");
    table.integer("schedule2020");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Course");
};
