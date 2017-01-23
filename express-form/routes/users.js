var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {
  var temp = req.query.say
  if(temp === undefined) {
    res.render('index', { title: 'HACKTIV8 FORM', answer: req.query.say});
  } else {
    res.render('index', { title: 'HACKTIV8 FORM', answer: req.query.say, result: req.query.say.toLowerCase()});
  }
});

module.exports = router;
