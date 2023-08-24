var express = require('express');
var csrf = require('csurf');
var csrfProtection= csrf();

var router = express.Router();

router.use(csrfProtection);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup', function(req, res, next) 
{
  res.render('user/signup', {csrfToken: req.csrfToken()});
})

module.exports = router;
