const { data } = require('jquery');
const moment = require('moment');

const db = require('../../../models');
const { NOW } = require('sequelize');
const Major = db.major;
class MajorController {
  create(req,res){
    const major = {
      manganh: req.body.manganh,
      tennganh: req.body.tennganh,
      makhoa: req.body.makhoa
    };
    console.log(major);
    Major.create(major)
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


module.exports=new MajorController;