const express= require('express');
const router= express.Router();
const studentController= require('../app/controllers/StudentController.js');
// const { route } = require('./subject.js');
router.post('/create',studentController.create);
router.get('/',studentController.index);


module.exports=router;