const ht=require('http');
const fs=require('fs');
const qs=require('querystring');
const urlLib=require('url');
const app=ht.createServer(function (req,res) {
    /*const obj=urlLib.parse(req.url,true);
    const get=obj.query;
    console.log(get);*/
    console.log(req.url);
    var data='';
    req.on('data',function (str1) {
        data+=str1;
        /*fs.readFile('D:/nodeStudy/node1/bbb.txt',function (err,data) {
            if (err){
                console.log('读取失败');
            } else {
                console.log(data.toString());
            }
        });*/
        var fileName=fs.readFile(req.url);
        res.write(fileName);
        res.end();
    });

    req.on('end',function () {
        fs.writeFile('D:/nodeStudy/node1/bbb.txt','测试写文件 end 事件比 on事件里面的函数先执行',function (err) {
            if (err){
                console.log('失败');
            }
        });
        console.log(qs.parse(data));
    });
});
app.listen(8888);