const express= require('express');
const router= express.Router();
const falcultyController= require('../app/controllers/FacultyController.js');
// const { route } = require('./subject.js');
router.post('/create',falcultyController.create);


module.exports=router;