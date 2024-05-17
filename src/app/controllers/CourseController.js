const { data } = require('jquery');
const moment = require('moment');

const db = require('../../../models');
const { NOW } = require('sequelize');
const Course = db.course;
class CourseController {
  create(req,res){
    const course = {
      makhoahoc: req.body.makhoahoc,
      tenkhoahoc: req.body.tenkhoahoc,
    };
    console.log(course);
    Course.create(course)
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


module.exports=new CourseController;