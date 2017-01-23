var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', function(req, res, next) {
  res.render('users',{
    hasil:req.query.say,
    input:req.query.say.toLowerCase()
  });
});

router.post('/users', function(req, res, next) {
  res.render('users',{
    input:req.body.say,
    hasil:req.body.say.toLowerCase()
  });
});



module.exports = router;
