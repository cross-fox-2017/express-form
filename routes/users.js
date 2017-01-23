var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.query.firstname === undefined && req.query.lastname === undefined) {
    res.render('form', { title: 'Login', firstname: req.query.firstname, lastname: req.query.lastname});
  } else {
    res.render('form', { title: 'Login', firstname: req.query.firstname.toLowerCase(), lastname: req.query.lastname.toLowerCase()});
  }
});

module.exports = router;
