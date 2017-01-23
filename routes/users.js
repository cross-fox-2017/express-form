var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.query.say=== undefined) {
    res.render('form', {title:"Form", answer:req.query.say, result:req.query.say});
  }else {
    res.render('form', {title:"Form", answer:req.query.say, result:req.query.say.toLowerCase()});
  }
});

module.exports = router;
