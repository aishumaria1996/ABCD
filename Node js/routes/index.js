var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/next', function(req, res, next) {
  res.render('next.html', { title: 'Express' });
});

module.exports = router;
