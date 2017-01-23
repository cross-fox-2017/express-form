var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let test = req.query.input.toLowerCase()
  //---RELEASE 1-----
  // if(req.query && req.query.say)
  // res.send(req.query.say);
  // res.render('index', {title: 'irwin'})
  res.render('render', {respond: test})
});

// router.post('/', function (res, req, next) {
//   req.send('index')
// })
module.exports = router;
