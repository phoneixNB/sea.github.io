
// 使用nodemon启动服务，这里已经安装好了
// 引入express
const express=require('express');
// 创建应用对象
const app=express();
// 创建路由规则
// request:对请求报文的封装。response：是对响应报文的封装
// app.get('/server',(request,response)=>{
//     // 设置响应头 设置允许跨域
//     response.setHeader('Access-Control-Allow-Origin','*');
//     // 设置响应
//     response.send("HELLO　AJAX")　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
// });
// app.post('/server',(request,response)=>{
//     // 设置响应头 设置允许跨域
//     response.setHeader('Access-Control-Allow-Origin','*');
//     // 设置响应
//     response.send("HELLO　AJAX POST")　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
// });
// // 可以接受任意类型的请求
// app.all('/server',(request,response)=>{
//     // 设置响应头 设置允许跨域
//     response.setHeader('Access-Control-Allow-Origin','*');
//     response.setHeader('Access-Control-Allow-Headers','*')
//     // 设置响应
//     response.send("HELLO　AJAX  POST")　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
// });
// app.all('/json-server',(request,response)=>{
//     // 设置响应头 设置允许跨域
//     response.setHeader('Access-Control-Allow-Origin','*');
//     response.setHeader('Access-Control-Allow-Headers','*')
//     // 设置响应
//     const data={
//         name:'jaiyi6'
//     };//对数据进行字符串的转换,json
//     let str=JSON.stringify(data);
//     response.send(str)　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
// });
// 针对ie缓存问题
// app.get('/ie',(request,response)=>{
//     // 设置响应头 设置允许跨域
//     response.setHeader('Access-Control-Allow-Origin','*');
//     // 设置响应
//     response.send('hello ie -3');　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
// });
// 延时响应
app.get('/delay',(request,response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 设置定时器
    setTimeout(() => {
          // 设置响应
        response.send('延时响应');
    }, 3000);
  
    
    　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
});
// 监听端口启动服务器
app.listen(8000,()=>{
    console.log("服务已启动，8000端口监听中......");
})