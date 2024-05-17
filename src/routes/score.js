const express= require('express');
const router= express.Router();
const scoreController= require('../app/controllers/ScoreController.js');
// const { route } = require('./subject.js');
router.post('/create',scoreController.create);


module.exports=router;