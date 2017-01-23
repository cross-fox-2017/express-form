var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // if(req.query && req.query.inputtt){
    // var kata = req.query.inputtt.toLowerCase()
    res.render('form', {title:"judul", answer:req.query.inputtt.toLowerCase()});
  // }
});

module.exports = router;
