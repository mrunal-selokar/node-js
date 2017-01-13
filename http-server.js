var http =require('http');
var mustache = require("mustache");

requestHandler=function(req,res){
	console.log('Inside requestHandler');
	if(req.url=='/'){
		result = mustache.render("Hello {{first_name}} {{last_name}}", 
  {
    "first_name": 'Mrunal',
    "last_name": 'Selokar'
  }
)
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

