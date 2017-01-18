var http =require('http');
//var mustache = require("mustache");
var random=require('./random-number')
requestHandler=function(req,res){
	console.log('Inside requestHandler');
	if(req.url=='/'){
		result=random();

		res.end(result);

	}
	else
	{
		res.end("dont wander away from home");
	}
}


var server=http.createServer(requestHandler);

server.listen(4000,function(){
	console.log('started server on port: 4000')
})

//pass parametres and method name in url like localhost:3000/?a=12&b=2&mehtod=sum
//write module wich will add,subtract,multiply,divide