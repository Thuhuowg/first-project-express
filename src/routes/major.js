const express= require('express');
const router= express.Router();
const majorController= require('../app/controllers/MajorController.js');
// const { route } = require('./subject.js');
router.post('/create',majorController.create);


module.exports=router;