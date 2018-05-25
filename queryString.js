const query=require('querystring');
const json=query.parse("user=lisi&pass=12345&age=18");
console.log(json);