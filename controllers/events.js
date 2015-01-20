var userModel =require('../models/Events');

exports.getAllEvent=function(req,res) {
    
    
    userModel.find(function (err,user) { 
        if(err)
            res.send(err);
        res.json(user);       
    });
}

exports.createEvent=function(req,res) {
    
    res.render('create');
}

exports.postNewEvent=function(req,res){
    var event=new userModel();
    event.ename=req.body.ename;
    event.edecription=req.body.edescription;
    event.evenue=req.body.evenue;
    event.edate=req.body.edate;
    event.etime=req.body.etime;
    event.econtactno=req.body.econtactno;
    event.eemail=req.body.eemail;
    event.save();                                    
 res.send(req.body.ename+" "+req.body.edescription+" "+req.body.evenue+" "+req.body.edate+" "+req.body.etime+" "+req.body.econtactno+" " +req.body.eemail+' done');
   
      
};




exports.getEventByEname=function(req,res){
userModel.find(req.params.ename,function(err,event){
    if(err)
        res.send(err);
    
     res.render('event',{
                    
                    user:event
                     });
});
                    
};





exports.deleteEventByEname =function(req,res){
    userModel.remove({
        ename: req.params.ename 
    }, function(err,user) {
            if(err)
            {res.send(err);}
            res.json({
                message:'successfully deleted event'
            });
        });
}