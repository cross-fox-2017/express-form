var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.post('/doCheckLower', function(req, res, next) {
//
//   let result = req.param("result")
//
//     if(result)
//     {
//       let lowerRes = result.toLowerCase()
//       res.send("Say [lowercase] : "+lowerRes)
//     }else{
//       res.render('index')
//     }
//
// });

module.exports = router;
