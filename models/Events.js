var mongoose=require('mongoose');


var userSchema =new mongoose.Schema({
    
    ename:String,
    edescription:String,    
    evenue:String,
    edate:String,
    etime:String,
    econtactno:String,
    eemail:String
   
    
    
});

module.exports=mongoose.model('Event',userSchema);
    