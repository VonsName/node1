const query=require('querystring');
const json=query.parse("user=lisi&pass=12345&age=18",true);
var url=json.pathname;
var get=json.query;
console.log(get);