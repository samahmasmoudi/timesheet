var express = require('express');
var fs = require('fs');

var router = express.Router();
var content = {};

fs.readFile('./time.json', 'utf8', function (err,data) {
  if (err) {
    return console.error(err);
  }

  content = JSON.parse(data);
  console.debug(data);
});


router.get('/', function(req, res, next) {
  res.send(content);
});


module.exports = router;
