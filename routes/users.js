var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.query && req.query.say){

    res.send("say = "+ req.query.say)
  }else{
    res.render('form')
  }
});

router.get('/post', function(req, res, next) {

    res.render('formPost',{ Result : "" })
});

router.post('/post', function(req, res, next) {
  if(req.body && req.body.result){
    let lowerRes = req.body.result.toLowerCase()
    res.render("formPost",{ Result : lowerRes })
  }else{
    res.render('formPost',{ Result : "" })
  }
});

module.exports = router;
