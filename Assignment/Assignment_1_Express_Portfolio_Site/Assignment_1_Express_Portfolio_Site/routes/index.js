var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("home", { title: "Home" });
});
router.get("/aboutMe", function (req, res, next) {
  res.render("aboutMe", { title: "About Me" });
});
router.get("/services", function (req, res, next) {
  res.render("services", { title: "services" });
});
router.get("/project", function (req, res, next) {
  res.render("project", { title: "Project" });
});
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact" });
});

module.exports = router;
