

class TestController{

    index(req,res){
        res.render('test');
    }
    show(req,res){
        res.send('TEST_ID')
    }
    
}
module.exports= new TestController;