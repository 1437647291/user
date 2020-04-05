//引入http模块     require是加载
var http = require("http")
//创建服务器   creatServer：创建服务器   参数：req：全称request请求    res：全称response响应
var server = http.createServer(function(req,res){
    console.log("I want to study good node!!!")
    //设置响应头  200：是状态码   Content-type：文本类型    有text/plain   image/jpeg   image/gif     charset：编码  utf-8
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    //结束响应
    res.end("我已经结束了")
})
//监听端口
server.listen(3000)
//后台只要修改代码必须重新启动！！！！