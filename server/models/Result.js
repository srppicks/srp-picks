/* eslint-disable camelcase */
const { Model } = require("objection");
const Golfer = require("./Golfer");

class Result extends Model {
  // Table name is the only required property.
  static get tableName() {
    return "Result";
  }

  // Objection.js assumes primary key is `id` by default

  static get jsonSchema() {
    return {
      type: "object",
      required: ["golferId", "courseId", "year"], // ?

      properties: {
        golferId: { type: "integer" },
        courseId: { type: "integer" },
        year: { type: "integer" },
        rounds: { type: "float" },
        sgOTT: { type: "float" },
        totDrives: { type: "float" },
        fairwayHit: { type: "float" },
        fairwayAttempt: { type: "float" },
        gdHit: { type: "float" },
        gdAttempt: { type: "float" },
        sgAPP: { type: "float" },
        gir200Hit: { type: "float" },
        gir200Attempt: { type: "float" },
        gir175Hit: { type: "float" },
        gir175Attempt: { type: "float" },
        gir150Hit: { type: "float" },
        gir150Attempt: { type: "float" },
        gir125Hit: { type: "float" },
        gir125Attempt: { type: "float" },
        gir100Hit: { type: "float" },
        gir100Attempt: { type: "float" },
        gir75Hit: { type: "float" },
        gir75Attempt: { type: "float" },
        fwProx: { type: "float" },
        fwAtt: { type: "float" },
        roProx: { type: "float" },
        roAtt: { type: "float" },
        sgArg: { type: "float" },
        sandSave: { type: "float" },
        sandAtt: { type: "float" },
        scramblingSave: { type: "float" },
        scramblingAtt: { type: "float" },
        sgPutt: { type: "float" },
        puttAtt: { type: "float" },
        onePutt: { type: "float" },
        threePutt: { type: "float" },
      }
    };
  }

  static get relationMappings() {
    const Course = require("./Course"); // eslint-disable-line

    return {
      golfer: {
        relation: Model.BelongsToOneRelation,
        modelClass: Golfer,
        join: {
          from: "Result.golferId",
          to: "Golfer.id"
        }
      },
      course: {
        relation: Model.BelongsToOneRelation,
        modelClass: Course,
        join: {
          from: "Result.courseId",
          to: "Course.id"
        }
      }
    };
  }

  static get idColumn() {
    return ["golferId", "courseId", "year"];
  }
}

module.exports = Result;
