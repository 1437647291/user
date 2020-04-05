//引入http模块
var http = require("http")
//创建一个服务器
var server = http.createServer(function(req,res){
    //设置响应头
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    console.log(req.url)
    if(req.url == "/red"){
        res.write("red")
    }else{
        res.write("我是默认的")
    }
    res.end()
})
server.listen(3000)