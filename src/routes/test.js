const express= require('express');
const router= express.Router();
const testController= require('../app/controllers/TestController');

router.get('/:id',testController.show);

router.get('/',testController.index);

module.exports=router;