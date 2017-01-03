const express = require('express');
const router = express.Router();
const data = require('../model/data')

router.post('/reset', (req, res) => {
  if(req.body.reset === 'true') {
    data.words = [];
    data.user.score = 0;
    res.send({success: true})
  }
});

module.exports = router;