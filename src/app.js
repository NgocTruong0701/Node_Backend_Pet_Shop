const express = require('express');
const morgan = require('morgan');
const app = express();

// init middlewares
app.use(morgan("dev")); // middlewares to write the logs when have request (has type: dev / )

// init db


// init route


// handling error 


module.exports = app;