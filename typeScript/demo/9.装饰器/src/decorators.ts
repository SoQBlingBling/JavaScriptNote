console.log('----------------');
// 属性装饰器
/*
a) 注册类时进行执行
b) 一般有两个参数
*/ 
/**
 *
 *
 * @param {*} tag    类的原型
 * @param {(string | symbol)} propertyName   key值
 */
function log(tag:any,propertyName:string | symbol){
    console.log('--------属性装饰器----------');

    console.log(tag,propertyName);
    
}
// 访问器装饰器 
/*

普通函数的target:类的prototype原型
静态函数的target:类的构造函数

configurable ： 设置属性是否可以删除或编辑属性值

enumerable ：设置属性是否可以枚举，即是否允许遍历

get ：   获取属性的值

set ：   设置属性的值

*/ 
/**
 *
 *
 * @param {*} tag  类的原型
 * @param {string} name 方法名
 * @param {PropertyDescriptor} decorator   属性描述（配置）
 */
function log1(tag:any,name:string,decorator:PropertyDescriptor){
    console.log('---------访问装饰器---------');
    
    console.log(tag);
    console.log(name)
    console.log(decorator);
}

//  方法装饰器
/*

configurable ： 设置属性是否可以删除或编辑属性值

enumerable  ： 设置属性是否可以枚举，即是否允许遍历

value  ： 设置属性默认值

writable ： 设置属性是否能够修改

*/ 
/**
 *
 *
 * @param {*} tag  类的原型
 * @param {string} name 方法名
 * @param {PropertyDescriptor} decorator   属性描述（配置）
 */
function log3(
    tag:any,
    name:string,
    decorator:PropertyDescriptor
){
    console.log('---------方法装饰器---------');
    console.log(tag);
    console.log(name);
    console.log(decorator);
    
}

// 参数装饰器
/**
 *
 * @param {*} tag    类的原型
 * @param {string} name    方法名  
 * @param {number} position    参数所在的位置 如果是第一个参数那么索引就是0
 * 
 */
function log4(tag:any,name:string,position:number){
    console.log('---------参数装饰器----------');
    console.log(tag);
    console.log(name);
    console.log(position);

}
class Product{
    @log
    title:string;
    price:number;
    @log1
    set setPrice(val:number){
        if(val>0){
            this.price = val;
        }else{
            throw new Error('价格不能为负数')
        }
    }
    constructor(title:string,p:number){
        this.title = title;
        this.price = p;
    }
    @log3
    getPrice(@log4 tax:number){
        return this.price * tax
    }

}

// 多个装饰器事 渲染顺序
/* 
a) 先从, 自上到下执行装饰器: Logger Start --> WithTemplate Start
b) 在从装饰器内部return函数, 自下而上执行: WithTemplate Function --> Logger Function
c)  0. 类装饰器——优先级 4 
    1. 方法装饰器——优先级 2 
    2. 访问器或属性装饰器——优先级 3
    3. 参数装饰器——优先级 1 
    4. 如果同一个类型的装饰器有多个，总是先执行后面的装饰器。
*/