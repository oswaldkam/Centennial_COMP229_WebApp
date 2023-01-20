var express = require("express");
var router = express.Router();
var projectData = require("../data/projectData.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("basePage", { title: "Home", page: "home", data: null });
});
router.get("/aboutMe", function (req, res, next) {
  res.render("basePage", { title: "About Me", page: "aboutMe", data: null });
});
router.get("/services", function (req, res, next) {
  res.render("basePage", { title: "Services", page: "services", data: null });
});
router.get("/projects", function (req, res, next) {
  res.render("basePage", {
    title: "Project",
    page: "projects",
    data: projectData.projectData,
  });
});
router.get("/contact", function (req, res, next) {
  res.render("basePage", { title: "Contact", page: "contact", data: null });
});

module.exports = router;
