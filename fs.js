const fs=require('fs');
fs.readFile('aaa.txt',function (err,data) {
    if (err){
        console.log('读取失败');
    } else {
        console.log(data.toString());
    }
});
fs.writeFile('aaa.txt','向文件写内容',function (err) {
    if (err){
        console.log('写文件失败')
    }
});