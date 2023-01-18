var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/aboutMe', function(req, res, next) {
  res.render('aboutMe', { title: 'About Me' });
});

module.exports = router;
