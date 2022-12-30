//通过 装饰器修改this的指向
function changeThis(targ:any,methodName:string,descriptor:PropertyDescriptor){
    const originalMethod = descriptor.value;
    const objDescriptor:PropertyDescriptor = {
        configurable:true,
        enumerable:false,
        get(){
            const bindFun = originalMethod.bind(this);
            return bindFun
        }
    }
    // 替换旧的描述方法
    return objDescriptor
    
}

class Printer {
    message = '工作中';
    @changeThis
    priterMsg(){
        console.log(111);
        
        console.log(this)
    }
}
let p = new Printer()
let btn = document.querySelector("button")
// 通过addeventListenner this 的指向为事件源  
// 可以通过箭头函数改变this指向 或者通过 bind方法改变this指向
// btn!.addEventListener('click',()=>p.priterMsg())
// btn!.addEventListener('click',p.priterMsg.bind(p))
btn!.addEventListener("click",p.priterMsg)