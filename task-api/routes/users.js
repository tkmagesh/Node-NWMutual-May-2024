/* 
var express = require('express');
var router = express.Router(); 
*/

import express from "express";
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

export default router;
