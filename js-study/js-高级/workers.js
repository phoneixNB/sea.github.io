var onmessage=function(event){
    // 分线程接收到主线程的数据event.data
    var number=event.data
    // 添加对数据的处理
    postMessage(此处添加返回的数据);
}