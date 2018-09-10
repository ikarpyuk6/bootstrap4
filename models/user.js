var mongoose=require('../mongoose');
var schemaUser=mongoose.Schema({
	name:{
		type:String,
	    unique:true, 
	    require:true
	},
	age:{
		type:Number,
	    require:true
	}
},{versionKey:false});
var User=mongoose.model("User",schemaUser);
module.exports=User;
