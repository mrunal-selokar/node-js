var http =require('http');

requestHandler=function(req,res){
	console.log('Inside requestHandler');
	if(req.url=='/'){
		res.end('welcome home');
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

