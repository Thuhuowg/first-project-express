const express= require('express');
const router= express.Router();
const siteController= require('../app/controllers/SiteController.js');
const { route } = require('./test.js');
router.get('/contact',siteController.contact);
router.get('/',siteController.index);

module.exports=router;