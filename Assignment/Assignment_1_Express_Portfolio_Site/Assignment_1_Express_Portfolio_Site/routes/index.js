var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("home", { title: "Home" });
});
router.get("/aboutMe", function (req, res, next) {
  res.render("aboutMe", { title: "About Me", page: "aboutMe" });
});
router.get("/services", function (req, res, next) {
  res.render("services", { title: "services", page: "services" });
});
router.get("/project", function (req, res, next) {
  res.render("projects", { title: "Project", page: "projects" });
});
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact", page: "contact" });
});

module.exports = router;
