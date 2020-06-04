/* eslint-disable no-console */
/* eslint no-unused-vars: ["error", { "args": "none" }] */
const express = require('express');
const path = require("path"); // eslint-disable-line global-require
const bodyParser = require('body-parser');
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[process.env.NODE_ENV || 'development']);
const { Model, ValidationError } = require('objection');
const cors = require('cors');

//tables
const Golfer = require('./models/Golfer');
const Course = require('./models/Course');
const Result = require('./models/Result');


Model.knex(knex);
const { wrapError, DBError } = require('db-errors');
const buildPath = path.resolve(__dirname, "../client/build");
const app = express();

const corsOptions = {
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  origin: '*',
  allowedHeaders: ['Content-Type', 'Accept', 'X-Requested-With', 'Origin'],
};


if (process.env.NODE_ENV === "production") {

  app.use(express.static(buildPath));
}

app.use(cors(corsOptions));
app.use(bodyParser.json());



//ROUTES---------------------------------------------------------------------
//GET
app.get("/api/golfers", (request, response, next) => {
  Golfer.query().then(golfer => {
    response.send(golfer);
  }, next); // <- Notice the "next" function as the rejection handler
});

app.get("/api/courses", (request, response, next) => {
  Course.query().then(course => {
    response.send(course);
  }, next); // <- Notice the "next" function as the rejection handler
});

app.get("/api/results", (request, response, next) => {
  Result.query().then(course => {
    response.send(course);
  }, next); // <- Notice the "next" function as the rejection handler
});

app.get("/api/results/golferId/:golferId",
  (request, response, next) => {
    Result.query()
      .where("golferId", request.params.golferId)
      .then(result => {
        response.send(result);
      }, next); // <- Notice the "next" function as the rejection handler
  }
);

app.get("/api/results/courseId/:courseId",
  (request, response, next) => {
    Result.query()
      .where("courseId", request.params.courseId)
      .then(result => {
        response.send(result);
      }, next); // <- Notice the "next" function as the rejection handler
  }
);

//POST
//PUT
//DELETE



//-----------------------------------------------------------------------------

app.use((error, request, response, next) => {
  if (response.headersSent) {
    next(error);
  }
  console.log(error);
  const wrappedError = wrapError(error);
  if (wrappedError instanceof DBError) {
    response.status(400).send(wrappedError.data || wrappedError.message || {});
  } else {
    response
      .status(wrappedError.statusCode || wrappedError.status || 500)
      .send(wrappedError.data || wrappedError.message || {});
  }
});

if (process.env.NODE_ENV === "production") {
  // All remaining requests return the React app, so it can handle routing.
  app.get("*", (request, response) => {
    response.sendFile(path.join(buildPath, "index.html"));
  });
}

module.exports = {
  app,
  knex,
};
