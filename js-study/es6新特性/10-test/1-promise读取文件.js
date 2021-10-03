// 1.引入fs模块
const fs=require('fs');
// 2.调用方法读取文件
// fs.readFile('./resources/静夜诗.md',(err,data)=>{
//     // 如果失败,则抛出错误
//     if(err) throw err;
//     // 如果没有出错,则输出内容
//     console.log(data.toString());
// })
// 3.使用promisefengzhuang
const p=new Promise(function(reslove,reject){
    fs.readFile('./resources/静夜诗.md',(err,data)=>{
        // 如果失败
    if(err) reject(err);
    // 如果没有出错,则输出内容
    reslove(data);
    })
})
p.then(function(value){
    console.log(value.toString())
},function(reason){
    console.log("读取失败")
})