const express = require('express');
const {User} = require('../models');
const router = express.Router();

router.get("/:id", async function (req, res, next) {
  try {
    const user = await User.findOne({
      where: {
        id: parseInt(req.params.id),
      },
    });
    if (user === null) {
      throw Error("User Not Found");
    }

    res.locals.title = user.name
    res.locals.user = user
    res.render('userView');
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router
