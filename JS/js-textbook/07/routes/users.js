var express = require("express");
const { User } = require("../models");
var router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res, next) {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post("/", async function (req, res, next) {
  try {
    const { name, age, married, comment } = req.body;
    await User.create({
      age: parseInt(age),
      married: married === "on",
      comment,
      name,
    });
    res.redirect("/");
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.get("/:id", async function (req, res, next) {
  try {
    const users = await User.findAll({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.json(users);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.delete("/:id", async function (req, res, next) {
  try {
    const users = await User.destroy({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.redirect("/");
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
