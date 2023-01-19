var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("basePage", { title: "Home", page: "home" });
});
router.get("/aboutMe", function (req, res, next) {
  res.render("basePage", { title: "About Me", page: "aboutMe" });
});
router.get("/services", function (req, res, next) {
  res.render("basePage", { title: "Services", page: "services" });
});
router.get("/projects", function (req, res, next) {
  res.render("basePage", { title: "Project", page: "projects" });
});
router.get("/contact", function (req, res, next) {
  res.render("basePage", { title: "Contact", page: "contact" });
});

module.exports = router;

