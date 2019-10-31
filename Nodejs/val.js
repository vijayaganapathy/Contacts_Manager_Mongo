var mongoose=require('mongoose');
var Check=mongoose.model('detail',{  
     //users is  a collection name
     //detail in mongo rep as details
Name:{
    type:String
},
Number:{
type:Number
},
Company:{
    type:String
},
Email:{
    type:String
},
Group_Name:{
    type:String
}
})
module.exports={Check}