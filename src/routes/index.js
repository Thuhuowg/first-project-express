const testRouter = require('./test');
const siteRouter = require('./site');
const userRouter = require('./user');
const subjectRouter=require('./subject');
const facultyRouter = require('./faculty');
const majorRouter = require('./major');
const courseRouter = require('./course');
const classRouter = require('./class');
const scoreRouter=require('./score');
const studentRouter=require('./student');


function route(app){
   
    app.use('/test',testRouter);
    app.use('/user',userRouter);
    app.use('/subject',subjectRouter);
    app.use('/faculty',facultyRouter);
    app.use('/major',majorRouter);
    app.use('/course',courseRouter);
    app.use('/class',classRouter);
    app.use('/score',scoreRouter);
    app.use('/student',studentRouter);
    app.use('/',siteRouter);
}

module.exports=route;
