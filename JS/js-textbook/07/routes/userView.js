const express = require('express');
const {User, Comment} = require('../models');
const router = express.Router();
const createError = require('http-errors')

router.get("/:id", async function (req, res, next) {
  try {
    const user = await User.findOne({
      where: {
        id: parseInt(req.params.id),
      },
    });
    if (user === null) {
      next(createError(404, "User Not Found"));
    }

    const comments = await Comment.findAll({
      where: {
        commenter: user.id
      }
    })
    
    res.locals = {
      title: user.name,
      user,
      comments,
    }
    res.render('userView');
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router
