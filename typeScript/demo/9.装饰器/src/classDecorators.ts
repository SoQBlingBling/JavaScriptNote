
// 装饰器取代class以及构造函数 示例
function WithtemplateInClass(template: string, tagId: string) {
    return function<T extends {new(...args:any[]):{name:string}}> (originalConstructor:T) {    // 此处必须传入值
    
        // 构造函数语法糖 这个构造函数取代了我们原来的类和原来的构造函数
        //  此处继承只是为了保留原来的class 内容
        return class  extends originalConstructor {

            constructor(..._:any[] ){
                super();
                console.log('classDecrators')
                let tagEl = document.getElementById(tagId);
                if (tagEl) {
                    tagEl.innerHTML = template;
                    tagEl.querySelector('h2')!.textContent = this.name
                }
            }
         
        }
    }
}

@WithtemplateInClass("<h2>hello</h2>",'app')
class PersonTwo {
    name: string = 'SoQBling'
    constructor() {

    }
}
/* 
如果在此处不进行实例化的话   装饰器仍然会执行但是页面不会进行渲染
因为在上方取代了类和构造函数   
在类中突然之间添加了逻辑代码
逻辑代码不会在定义类时执行  
*/
// let templateInClass =  new PersonTwo()