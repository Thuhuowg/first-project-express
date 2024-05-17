const { data } = require('jquery');
const moment = require('moment');

const db = require('../../../models');
const { NOW } = require('sequelize');
// const Subject = db.subject;
class SubjectController {
  create(req,res){
    const subject = {
      mamonhoc: req.body.mamonhoc,
      tenmonhoc: req.body.tenmonhoc,
      sotiet: req.body.sotiet,
     
    };
    // console.log(subject);
    Subject.create(subject)
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


module.exports=new SubjectController;