const { data } = require('jquery');
const moment = require('moment');

const db = require('../../../models');
const { NOW } = require('sequelize');
const Faculty = db.faculty;
class FacultyController {
  create(req,res){
    const faculty = {
      makhoa: req.body.makhoa,
      tenkhoa: req.body.tenkhoa,
    };
    console.log(faculty);
    Faculty.create(faculty)
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


module.exports=new FacultyController;