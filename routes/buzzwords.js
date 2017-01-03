const express = require('express');
const router = express.Router();
const data = require('../model/data');

// let words = [];
// let user = {
//   score: 0
// }

router.route('/')
  .get((req, res) => {
    res.json(data.words);
  })
  .post((req,res) => {
    data.words.push(req.body);
    res.send({'success': true})
  })
  .put((req,res) => {
    let bw = req.body.buzzWord;
    let heard = req.body.heard;
    data.words.forEach((x) => {
      if(x.buzzWord === bw && heard) {
        data.user.score += Number(x.points);
      }
    })
    res.send({
      success: true,
      newScore: data.user.score
    });
  })
  .delete((req,res) => {
    let bw = req.body.buzzWord;
    let success = false;
    data.words.forEach((x) => {
      if(bw === x.buzzWord) {
        console.log('bw: ', bw);
        console.log('x.buzzWord: ', x.buzzWord);
        let index = data.words.indexOf(x);
        data.words.splice(index,1);
        success = true;
      }
    })
    if(success) {
      res.send(true)
    } else {
      res.send(false)
    }
  })



module.exports = router;
