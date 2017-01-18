var http=require('http');


requestHnadler=function(req,res)
{
	var htmlContent = "<html>Hello World</html>";
	res.end(htmlContent);
	console.log("Inside handler");
}
var server=http.createServer(requestHnadler);
server.listen(5000,function(){
	console.log("server started on 5000");
})
