const express = require('express');
const router = express.Router();

let words = [];

router.route('/')
  .get((req, res) => {
    res.json(words);
  })
  .post((req,res) => {
    words.push(req.body);
    res.send({'success': true})
  })
  .put((req,res) => {
    let bw = req.buzzWord;
    let heard = req.heard;
    words.forEach((x) => {
      console.log(x);
    })
    res.send('hi');

  })
  .delete((req,res) => {

  })



module.exports = router;