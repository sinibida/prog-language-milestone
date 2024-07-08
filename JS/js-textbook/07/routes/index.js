var express = require('express');
const { User, Comment } = require('../models');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.locals.users = await User.findAll();
  res.locals.comments = await Comment.findAll(
    {
      include: [
        {
          model: User,
          required: true,
        }
      ],
      order: [
        ['created_at', 'DESC']
      ],
    }
  )
  res.locals.title = "Sequelize"
  res.render('index');
});

router.get('/register', async function(req, res, next) {
  res.locals.title = "회원가입"
  res.render('register');
});

router.get('/post-comment', async function(req, res, next) {
  res.locals.title = "방명록 등록"
  res.render('postComment');
});

module.exports = router;
