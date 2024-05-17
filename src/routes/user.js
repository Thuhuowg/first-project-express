const express= require('express');
const router= express.Router();
const userController= require('../app/controllers/UserController.js');
const { route } = require('./user.js');
router.get('/findAll',userController.findAll);
router.get('/findById/:id',userController.findById);
router.get('/findByName/:name',userController.findByName);
router.put('/update/:id',userController.update);
router.delete('/deleteById/:id',userController.deleteById);
router.delete('/delete',userController.deleteAll);
router.get('/create',userController.index);
router.post('/create',userController.create);


module.exports=router;