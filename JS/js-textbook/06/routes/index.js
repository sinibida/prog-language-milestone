var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/sample", function (req, res, next) {
  // Template Variable
  res.locals.title = "My Sample SIte!!!";
  res.locals.amogus = "SuSSuSAmongus";
  res.locals.langArr = ['js', 'ts', 'react', 'rust']
  res.locals.data = {
    type: 'success',
    message: "Minim ea sint ullamco minim culpa pariatur commodo excepteur."
  }
  res.render("sample");
});

module.exports = router;
