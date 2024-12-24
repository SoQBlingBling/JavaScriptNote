//!ypeScript 中的枚举允许我们定义一组命名常量。使用枚举可以更轻松地记录意图或创建一组不同的案例。
    //枚举默认情况下数值是从0开始的  依次递增
enum ServeResponse{
 success=200,
 error=400,
}
interface serveData{
    response:ServeResponse,
    data:string[]
}
function getResponse():serveData{
    return {
        response:ServeResponse.success,
        data:['bob','susan']
    }
}
let response = getResponse()
console.log(response);
