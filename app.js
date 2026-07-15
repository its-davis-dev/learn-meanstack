var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//TO do [Remove later]
// const db = require('./api/db/db');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let providerRouter = require('./routes/providers');
let apiRouter = require('./api/routes/main.routes'); // La que creamos

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Configuro en donde están mis rutas.
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/providers', providerRouter);
app.use('/api', apiRouter); // La que creamos
app.use('/*', apiRouter); // Te devuelve a lo que indica el indexRouter.

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
