var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  if (req.query.input=== undefined) {
    res.render('form', {title:"Form", result:req.query.input});
  }else {
    res.render('form', {title:"Form", result:req.query.input.toLowerCase()});
  }
});

module.exports = router;
