var express = require("express");
var router = express.Router();
var models = require("../models");
/* GET users listing. */
router.get("/get_friends", function(req, res, next) {
  res.json("respond with a resource");

});

module.exports = router;
