const express= require('express');
const router= express.Router();
const classController= require('../app/controllers/ClassController.js');
// const { route } = require('./subject.js');
router.post('/create',classController.create);


module.exports=router;