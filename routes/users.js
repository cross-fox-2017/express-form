var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //---RELEASE 1-----
  // if(req.query && req.query.say)
  // res.send(req.query.say);
  // res.render('index', {title: 'irwin'})
  res.render('render', {respond: ""})
});

router.post('/', function (req, res, next) {
  if (req.body.input) {
    var test = req.body.input.toLowerCase()
  }
  res.render('render', {respond: test})
})

module.exports = router;
