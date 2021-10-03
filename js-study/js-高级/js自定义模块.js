// function f(){
//     var a=11;
//     function modd(){
//         a++;
//         console.log(a);
//     }
//     function sodd(){
//         a--;
//         console.log(a)
//     }
//     window.myfun={
//         sodd:sodd,
//         modd:modd
//     }
// }
(function f(window){
    var a=11;
    function modd(){
        a++;
        console.log(a);
    }
    function sodd(){
        a--;
        console.log(a)
    }
    window.myfun={
        sodd:sodd,
        modd:modd
    }
})(window)
