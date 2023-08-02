var mongoose  =  require('mongoose');  
   
var excelSchema = new mongoose.Schema({  
    name:{  
        type:String  
    },  
    email:{  
        type:String  
    },    
    mobile:{  
        type:Number  
    },
    dateofbirth:{
        type:String
    },
    Workexperience:{
        type:String
    },
    Currentlocation:{
        type:String
    },
    Postaladdress:{
        type:String
    },
    Currentemployee:{
        type:String
    },
    Currentdestination:{
        type:String
    },


});  
   
module.exports = mongoose.model('userModel',excelSchema);  
