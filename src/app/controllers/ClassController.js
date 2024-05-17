const { data } = require('jquery');
const moment = require('moment');

const db = require('../../../models');
const { NOW } = require('sequelize');
const Class = db.class;
const Student = db.student;
class ClassController {
  create(req,res){
    const lop = {
     malop: req.body.malop,
     tenlop: req.body.tenlop,
     manganh:req.body.manganh,
     makhoahoc: req.body.makhoahoc,
    };
    
    Class.create(lop)
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
  index(req, res){
        console.log('-----',);
        Class.findAll({
            include: { model: Student, as: 'students'},

        })
        
        .then(data=>{
            res.send(data);
        })
        .catch(err=>{
            res.status(500).send({
                message:
                err.message || "Some error occurred while..."
            });
        });
    }
}


module.exports=new ClassController;