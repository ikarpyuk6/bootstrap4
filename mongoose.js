var mongoose=require('mongoose');
mongoose.connect('mongodb://user1:user11@ds239029.mlab.com:39029/mybase');
console.log("mongoDB connect.....");
module.exports=mongoose;