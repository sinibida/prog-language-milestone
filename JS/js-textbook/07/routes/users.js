var express = require("express");
const { User } = require("../models");
var router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res, next) {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (e) {
    console.error(e)
  }
});

router.get("/:id", async function (req, res, next) {
  try {
    const users = await User.findAll({
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.json(users);
  } catch (e) {
    console.error(e)
  }
});

module.exports = router;
