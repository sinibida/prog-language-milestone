var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/flash", function (req, res, next) {
  req.session.message = "Session Message";
  req.flash("message", "Flash Message");

  // == res.redirect(...)
  res.writeHead(302, {
    location: "/users/flash/result",
  });
  res.end();
});

router.get("/flash/result", function (req, res, next) {
  res.write(`${req.session.message} | ${req.flash("message")}`);
  // flash로 불러오면 사라짐
  res.end();
});

module.exports = router;
