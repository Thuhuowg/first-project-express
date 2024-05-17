const { data } = require('jquery');
const moment = require('moment');

const db = require('../../../models');
const { NOW } = require('sequelize');
const Score = db.score;
class ScoreController {
  create(req,res){
    const score = {
     malop: req.body.malop,
     tenlop: req.body.tenlop,
     manganh:req.body.manganh,
     makhoahoc: req.body.makhoahoc,
    };
    // console.log(class);
    Score.create(score)
        .then(data=>{
           
            res.send(data);
        })
        .catch(err=>{
            res.status(500).send({
                message:
                err.message || "Don't create subject!!"
            });
        });
  }
  index(req,res){

  }
}


module.exports=new ScoreController;