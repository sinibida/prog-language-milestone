var express = require('express');
const { User } = require('../models');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.locals.users = await User.findAll();
  res.locals.title = "Sequelize"
  res.render('index');
});

router.get('/register', async function(req, res, next) {
  res.locals.users = await User.findAll();
  res.locals.title = "회원가입"
  res.render('register');
});

module.exports = router;
