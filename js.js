var http=require('http')

http.createServer(function (request, response) {
	
	// 发送 HTTP 头部
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});
	process.nextTick(function () {
		console.log(222)
	})
	console.log(333)
	// 发送响应数据 "Hello World"
	response.end('Hello World\n');
}).listen(8888);

