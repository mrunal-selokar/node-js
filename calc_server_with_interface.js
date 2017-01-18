var http=require('http');
var form=require('./calculator_interface.html');
requestHnadler=function(req,res)
{
	res.end(form);
}
var server=http.createServer(requestHnadler);
server.listen(5000,function(){
	console.log("serverStarted");
})


	