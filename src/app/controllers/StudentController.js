const { data } = require('jquery');
const moment = require('moment');
const Joi = require('joi')
const db = require('../../../models');
const { Op } = require('sequelize');
const Student = db.student;
const Class=db.class;
const schema = Joi.object({
    masv: Joi.string()
        .required()
        .max(10),
    hosv: Joi.string(),
    tensv:Joi.string(),
    gioitinh: Joi.number()
        .integer()
        .min(0)
        .max(1),
    noisinh: Joi.string(),
    diachi: Joi.string(),
    matinh:Joi.string()
        .max(6),
    maquan: Joi.string()
        .max(2),
    malop: Joi.string()
        .max(8)
        .required(),
});
class StudentController {
  create(req,res){
    const student = {
     masv: req.body.masv,
     hosv: req.body.hosv,
     tensv:req.body.tensv,
     gioitinh: req.body.gioitinh,
     ngaysinh: moment(req.body.ngaysinh, 'DD/MM/YYYY').toDate(),
     noisinh: req.body.noisinh,
     diachi:req.body.diachi,
     matinh:req.body.matinh,
     maquan: req.body.maquan,
     malop:req.body.malop,

    };
    schema.validate(student);
    
    console.log('-----',req.body);
    Student.create(student)
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
    console.log('-----',);
    const masv = req.query.masv;
    var condition = masv ? {masv: {[Op.iLike]: `%${masv}%`}} : null;
    Student.findAll({
        where: condition,
        // attributes:['masv','hosv','tensv']
        include: { model: Class, as: 'classes'},

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
  };
  update(req,res){

  }
}


module.exports=new StudentController;