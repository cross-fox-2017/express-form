var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let say =  req.query.say
  let say2 = req.query.say2
  res.render('index', { title: 'Express', say: say, say2: say2 });
});

module.exports = router;
