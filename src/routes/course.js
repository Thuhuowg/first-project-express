const express= require('express');
const router= express.Router();
const courseController= require('../app/controllers/CourseController.js');
// const { route } = require('./subject.js');
router.post('/create',courseController.create);


module.exports=router;