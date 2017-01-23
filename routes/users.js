var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  // Release 1 Routing and Talk
  res.send(req.query.coba);
  res.render('form', {output:""})
});

router.post('/', function(req, res, next) {

    if(req.body.input){
      var result = req.body.input.toLowerCase();
    }



  res.render('form', {output: result})
});

module.exports = router;
