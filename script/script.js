$(document).ready(function(){ 
  	var iduser="";

 function getUser(){
 	$.get('/getusers', function(data){
 		createTable(data,$("#table"));
 	})

 }
function createTable(mas,element){
	$(element).empty()
	$("<table>").addClass('table')
	.addClass('table-border')
	.addClass('table-primary')
	.appendTo(element);
	for (var i = 0; i < mas.length; i++) {
		$("<tr>").addClass("tr").appendTo(".table");
		for(var key in mas[i]){
			$("<td>").addClass('td')
			.appendTo('.tr:last').text(mas[i][key]);
			

		}
		$('.tr:last td:first').hide();
		$("<td>").addClass('td')
		.appendTo('tr:last')
		$('<button>').addClass('btn').addClass('btn-danger')
		.appendTo('.td:last').text('delete')
		.click(function(){
			var id=$(this).parent().parent()
				.children().filter(':first').text();
			   
				deleteUser(id)
			// console.log(id);
		
		})

			$("<td>").addClass('td')
			.appendTo('tr:last')
			$('<button>').addClass('btn').addClass('btn-primary')
			.appendTo('.td:last').text('UpData')
			.click(function(){
				var id=$(this).parent().parent()
				.children().filter(':first').text();
				iduser=id;

				var name=$(this).parent().parent()
				.children().filter(':eq(1)').text();
				$('.name').val(name);

				var age=$(this).parent().parent()
				.children().filter(':eq(2)').text();
				$('.age').val(age);
				
				

			})


	}
}

//добавлення юзера в базу даних

function addUser(name,age,id){
	var obj={
		name:name,
		age:age
	}
	if(!iduser){
		if (!name || !age) return;
		$.post('/adduser',obj,function(data){
		console.log(data);
		getUser()
	});
	}
  
    else{
	obj.id=iduser;
	$.post('/updateuser',obj,function(data){
		iduser="";
		console.log(data);
		getUsers();
	})



	
}}

function deleteUser(id){
	var obj={id:id};
	$.post('/deleteuser',obj,function(data){
		console.log(data);
		 getUser();
	})
}





$('.adduser').click(function(){
	addUser($('.name').val(),$('.age').val());
	$('.name').val("");
	$('.age').val("");

})


 getUser();





})