const express= require('express');
const router= express.Router();
const subjectController= require('../app/controllers/SubjectController.js');
// const { route } = require('./subject.js');
router.post('/create',subjectController.create);


module.exports=router;