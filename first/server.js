const http=require('http');
http.createServer(function (req,res) {
    console.log('请求到达');
    var str='';
    //post传输数据是分段传输的 所以接受的时候也要分段接受
    //相当于事件  data事件可能会发生很多次 根据数据的大小
    var i=0;
    req.on('data',function (data) {
        console.log(`第${i++}次收到数据`);
        str+=data;
    });

    //end  数据全部到达的事件  事件只会发生一次
    req.on('end',function () {
        console.log(str);
    });
}).listen(8888);
