const http=require('http');
const ulrLib=require('url');
const queryString=require('querystring');
const server=http.createServer(function (request,response) {
    //var data=queryString.parse(request.uri);
    //console.log(request.uri);
    var obj=ulrLib.parse(request.url,true);
    var get=obj.pathname;
    var data=obj.query;

    console.log('请求到达');
    console.log('数据'+get,data);
    //response.write('abc');
   /* console.log(request.url);
    switch (request.url){
        case '/1.jsp':
            response.write('111');
            break;
        case '/2.jsp':
            response.write('222');
            break;
        default:
            response.write('333');
    }*/
    response.end();
    //console.log('man');
});
server.listen(8080);