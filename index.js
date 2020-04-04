const express = require("express"),
      app = express(),
      cors = require("cors"),
      bodyParser = require("body-parser"),
      path = require('path'),
      winston = require('winston'),
      expressWinston = require('express-winston');

const PORT = process.env.PORT || 7000;

const log = require('./util/logger');
const { config } = require("./config");

// HANDLERS
const errorHandler = require('./handlers/error');

app.use(cors());
app.use(bodyParser.json());

// Set up according to environment
if (app.get('env') === 'production') {

  // Log environment details
  log.info(`Running Production Environment`);

} else if(app.get('env') === 'development'){

  // Log environment details
  log.info(`Running Development Environment`);

}

// **********
// IMPORT ROUTES FILES
// **********

const homeRoutes = require('./routes/home');
const blogRoutes = require('./routes/blog');

// **********
// ROUTES
// **********

// Blog
app.use('/api/homepage', homeRoutes);
app.use('/api/blog', blogRoutes);

// ERROR HANDLING
app.use(function(req, res, next){
  let err = new Error("Not Found");
  err.status = 404;
  log.error(err);
  next(err);
});

// // Place at bottom
// // APP USE - error handler -
app.use(errorHandler);

app.listen(PORT, function(){
  console.log(`${config.name} is starting on port ${PORT}`);
})
