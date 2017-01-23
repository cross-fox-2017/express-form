var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  // if(req.query && req.query.say)
  res.send(req.query.say);
  // res.render('index', {title: 'irwin'})
  // res.render('render')
});

module.exports = router;
