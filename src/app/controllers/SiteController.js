const db = require('../../../models');
const User = db.user;
const Op= db.Sequelize.Op;
const { v4: uuidv4 } = require('uuid');
class SiteController{

    index(req,res){
        res.render('home');
    }
    contact(req,res){
        res.send('contact about!');
    }
    // create(req,res){
    //     // if (!req.body.id) {
    //     //     res.status(400).send({
    //     //       message: "Content can not be empty!"
    //     //     });
    //     //     return;
    //     //   }
    //     const user = {
    //         id: uuidv4(),
    //         name: req.body.name,
    //         birthday: req.body.birthday,
    //         phone: req.body.phone,
    //         address: req.body.address,
    //         email: req.body.email,
    //         password: req.body.password,
    //         role: 1
    //     };
    //     User.create(user)
    //     .then(data=>{
    //         console.log(data);
    //         // res.send(data);
    //     })
    //     .catch(err=>{
    //         res.status(500).send({
    //             message:
    //             err.message || "Don't create user!!"
    //         });
    //     });
    //     // console.log('===',user);
    //     // res.send({aa: 'Complete'});
    // }
    // findAll(req, res){
    //     const id = req.query.id;
    //     var condition = id ? { id: { [Op.iLike]: `%${id}%` } } : null;
      
    //     User.findAll({ where: condition })
    //       .then(data => {
    //         res.send(data);
    //       })
    //       .catch(err => {
    //         res.status(500).send({
    //           message:
    //             err.message || "Some error occurred while retrieving tutorials."
    //         });
    //       });
    //   };
}
module.exports=new SiteController;