// var express = require('express');
import express from "express";
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

export default router;

// module.exports = router;
