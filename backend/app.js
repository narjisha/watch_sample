var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyparser = require('body-parser')
var logger = require('morgan');
const cors= require('cors')
const connectDB =require ('./config/db')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter =require('./routes/product')
var serviceRouter = require ('./routes/service')
var mensRouter = require ('./routes/mens')
var womensRouter = require('./routes/womens')
var productroutesRouter = require('./routes/productroutes')
// const axios = require('axios');

var app = express();
connectDB()
app.use(cors({
  origin: '*'
}));

app.use(bodyparser.json({limit: '5mb'}));//increse the payload size
app.use(bodyparser.urlencoded({extended:false}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product',productRouter);
app.use('/service',serviceRouter)
app.use('/mens',mensRouter)
app.use('/womens',womensRouter)
app.use('/productroutes',productroutesRouter)

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
