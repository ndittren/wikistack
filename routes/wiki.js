const express = require('express');
const router = express.Router();
const { addPage, wikipage } = require("../views");

router.get('/', (req, res, next) => {
    res.send('got to GET');
});

router.post('/', (req, res, next) => {
  res.send('got to POST /wiki/');
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});


module.exports = router;
