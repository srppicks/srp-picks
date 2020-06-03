// The following error prevention is appropriate because
// the functions are provided by knex itself.
/* eslint func-names: ["error", "never"] */
exports.up = function(knex) {
  return knex.schema.createTable("Result", table => {
    table.integer("golferId");
    table.integer("courseId");
    table.integer("year");
    table.primary(["golferId", "courseId", "year"]);
    table.float("rounds");
    table.float("sgOTT");
    table.float("totDrives");
    table.float("fairwayHit");
    table.float("fairwayAttempt");
    table.float("gdHit");
    table.float("gdAttempt");
    table.float("sgAPP");
    table.float("gir200Hit");
    table.float("gir200Attempt");
    table.float("gir175Hit");
    table.float("gir175Attempt");
    table.float("gir150Hit");
    table.float("gir150Attempt");
    table.float("gir125Hit");
    table.float("gir125Attempt");
    table.float("gir100Hit");
    table.float("gir100Attempt");
    table.float("gir75Hit");
    table.float("gir75Attempt");
    table.float("fwProx");
    table.float("fwAtt");
    table.float("roProx");
    table.float("roAtt");
    table.float("sgArg");
    table.float("sandSave");
    table.float("sandAtt");
    table.float("scramblingSave");
    table.float("scramblingAtt");
    table.float("sgPutt");
    table.float("puttAtt");
    table.float("onePutt");
    table.float("threePutt");

  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Result");
};
