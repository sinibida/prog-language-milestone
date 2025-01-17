var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session");
var flash = require('connect-flash')

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Custom Middleware
app.use(function (req, res, next) {
  console.log("My Middleware", req.url);
  next(); // 주석 처리 시: Routing X
});

app.use(logger("dev"));
// !: static 미들 웨어를 logger 바로 아래에 둠으로서 절약
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("abcdefg"));
// !: 세션
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "abcdefg",
    cookie: { httpOnly: true, secure: false },
  })
);
app.use(flash());

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
