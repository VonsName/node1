const http=require('http');
const ulrLib=require('url');
const queryString=require('querystring');
const pa=require('path');
var server=http.createServer(function (request,response) {
    //var data=queryString.parse(request.uri);
    //console.log(request.uri);
    //var obj=ulrLib.parse(request.url,true);
    //var get=obj.pathname;
   // var data=obj.query;

    //console.log('请求到达');
    //console.log('数据'+get,data);
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
    //response.end();
    //console.log('man');
    console.log('请求到达');
    var str='';
    //post传输数据是分段传输的 所以接受的时候也要分段接受
    //相当于事件  data事件可能会发生很多次 根据数据的大小
    var i=0;

    request.on('data',function (str1) {
        console.log(`第${i++}次收到数据`);
        str+=str1;
    });

    //end  数据全部到达的事件  事件只会发生一次
    request.on('end',function () {
        console.log(str);
        var json=queryString.parse(str);
        console.log(json);
        response.write(str);
    });
});
server.listen(8080);