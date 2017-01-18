var http=require('http');
var calculate=require('./calculator');

requestHnadler=function(req,res)
{
	var query=new String(req.url);
	var keyValuePairs = query.split("&"); 
	var method=keyValuePairs[0].split("=")[1];
	var no1=new String(keyValuePairs[1]).split("=")[1]||"0";
	var no2=new String(keyValuePairs[2]).split("=")[1]||"0";
	
	
	/*var method=keyValuePairs[0].replace("/","").split("=")[1];
	var no1=new String(keyValuePairs[1].split("&")).split("=")[1]||"0";
	var no2=new String(keyValuePairs[2].split("&")).split("=")[1]||"0"
	*/
	var result=calculate(method.toLowerCase(),Number(no1),Number(no2));
	var pageContent="<html>"+method+"("+no1+","+no2+") ="+result+ "</html>";
	res.end(pageContent);
}
var server=http.createServer(requestHnadler);
server.listen(5000,function(){
	console.log("serverStarted");
})


	