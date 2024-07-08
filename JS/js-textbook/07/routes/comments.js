var express = require("express");
const { Comment, User } = require("../models");
var router = express.Router();

/* GET comments listing. */
router.get("/", async function (req, res, next) {
  try {
    const comments = await Comment.findAll();
    res.json(comments);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post("/", async function (req, res, next) {
  try {
    const { commenter, comment } = req.body;

    const result = await Comment.create({
      comment,
      commenter
    });
    res.status(201).json(result);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.get("/:id", async function (req, res, next) {
  try {
    const comments = await Comment.findAll({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.json(comments);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.delete("/:id", async function (req, res, next) {
  try {
    const comments = await Comment.destroy({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.redirect(303, "/");
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
