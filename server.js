var http=require('http');
var server=http.createServer(function (request,response) {
    response.write('abc');
    console.log(request.url);
    switch (request.url){
        case '/1.jsp':
            response.write('111');
            break;
        case '/2.jsp':
            response.write('222');
            break;
        default:
            response.write('333');
    }
    response.end();
    //console.log('man');
});
server.listen(8080);