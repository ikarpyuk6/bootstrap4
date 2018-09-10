var express = require('express')
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static(__dirname));


var User=require('./models/user');
app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
})
app.get('/getusers',function(req,res){
	User.find(function(err,data){
		console.log(data);
		res.send(data);
	})
})
app.post('/adduser',function(req,res){
	console.log(req.body)
	var user=new User(req.body);

	user.save(function(err,data){
		console.log(data);
		res.send('add user!');
	})
})

app.post('/deleteuser',function(req,res){
	console.log(req.body);
	User.remove({_id:req.body.id},function(err,data){
	res.send('deleteuser!');

	})

})
app.post('/updateuser',function(req,res){
	console.log(req.body);
	User.update(
		{_id:req.body.id},
		{name:req.body.name,
		age:req.body.age}
		,function(err,data){
	    res.send('update user!');

	})

})


app.listen(process.env.PORT||8080);

console.log("run server!");