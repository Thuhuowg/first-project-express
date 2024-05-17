const { data } = require('jquery');
const moment = require('moment');

const db = require('../../../models');
const User = db.user;
const Op= db.Sequelize.Op;
const { v4: uuidv4 } = require('uuid');
class UserController{
    index(req,res){
        res.render('home');
    }
    create(req,res){
        // if (!req.body.id) {
        //     res.status(400).send({
        //       message: "Content can not be empty!"
        //     });
        //     return;
        //   }
        // console.log(req);
        const user = {
            id: uuidv4(),
            name: req.body.name,
            birthday: moment(req.body.birthday, 'DD/MM/YYYY').toDate(),
            // birthday: new Date(req.body.birthday),
            phone: req.body.phone,
            address: req.body.address,
            email: req.body.email,
            password: req.body.password,
            role: 1
        };
        console.log(user);
        User.create(user)
        .then(data=>{
           
            res.send(data);
        })
        .catch(err=>{
            res.status(500).send({
                message:
                err.message || "Don't create user!!"
            });
        });
        // console.log('===',user);
        // res.send({aa: 'Complete'});
    }
    findAll(req, res){
        const id = req.query.id;
        var condition = id ? { id: { [Op.iLike]: `%${id}%` } } : null;
      
        User.findAll({ where: condition })
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving tutorials."
            });
          });
      };
      findById(req, res){
        const id = req.params.id;

        User.findByPk(id)
          .then(data => {
            if (data) {
              res.send(data);
            } else {
              res.status(404).send({
                message: `Cannot find User with id=${id}.`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Error retrieving User with id=" + id
            });
          });
      }
      findByName(req,res){
        const name = req.params.name;
        User.findOne({where : {name: name}})
        .then(data => {
            if(data){
                res.send(data);
            }else {
                res.status(404).send({
                    message:'Can not find User'
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: 'error'
            });
        });
      }
     
      update(req, res){        
        const user = {
            name: req.body.name,
            birthday: moment(req.body.birthday, 'DD/MM/YYYY').toDate(),
            // birthday: new Date(req.body.birthday),
            phone: req.body.phone,
            address: req.body.address,
            email: req.body.email,
            password: req.body.password,
            
        };
        console.log(user);
        const id = req.params.id;
        User.update(user, {
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "User was updated successfully."
              });
            } else {
              res.send({
                message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Error updating User with id=" + id
            });
          });
      }
      deleteById(req,res){
        const id = req.params.id;

        User.destroy({
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "User was deleted successfully!"
              });
            } else {
              res.send({
                message: `Cannot delete User with id=${id}. Maybe User was not found!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Could not delete User with id=" + id
            });
          });
      }
      deleteAll(req,res){
        User.destroy({
            where: {},
            truncate: false
          })
            .then(nums => {
              res.send({ message: `${nums} Users were deleted successfully!` });
            })
            .catch(err => {
              res.status(500).send({
                message:
                  err.message || "Some error occurred while removing all Users."
              });
            });
      }
}
module.exports=new UserController;