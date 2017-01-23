var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let say =  req.query.say
  let say2 = req.query.say2
  res.render('users', { title: 'Express', say: say, say2: say2 })
})
router.post('/', function(req, res, next) {
  console.log(req.body);
  let say =  req.body.say.toLowerCase()
  let say2 = req.body.say2.toLowerCase()
  console.log("input  ada huruf besar: ");
  console.log(req.body.say);
  console.log("output jadi huruf kecil semua: ");
  console.log(say);
  res.render('users', { title: 'Express', say: say, say2: say2 });
});

module.exports = router;
