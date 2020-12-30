### 1.function

高内聚  低耦合

把相同的代码抽取出来

### 2.变量提升

###### 1.AO对象

```js
//ACtivation object(执行期上下文)
```

###### 2.参和变量声明，将变量和形参名作为AO属性名值为 undefined

```js
AO{
	a:undefined
    b:undefined
}
```

###### 3.将形参和实参统一

```js
AO{
	a:1
    b:2
}
```



###### 4.在函数体里面找函数声明值赋予函数体

```js
AO{
    a:function a (){}
}
```



###### demo

```js
function fn(a){
    console.log(a) // function a(){}    
    var a = 123;
    console.log(a)  //123      
    function a (){}
    console.log(a) //123       
    var b = function (){}
    console.log(b)// function b(){}  
} 
fn(1)
```

```js
function test(a,b){
    console.log(a); // 1  
    c = 0;
    var c;
    a = 3;
    b = 2;
    console.log(b)  // 2
    function b(){}
    function d(){}
    console.log(b) //  2
}
test(1)
```

```js
 function test (a,b){
     console.log(a);  // function a(){}
     console.log(b);  // undefined
     var b  = 234;
     console.log(b);//234
     a = 123;
     console.log(a);//123
     function a (){}; 
     var a;
     b = 234;
     var b = function(){
     console.log(a) // 123
     console.log(b) // functino(){}
         
     }
 }
test(1)
```

### 3.代码屏蔽

```
<noscript></noscript>
```



### 4.变量在内存中的存储与释放

收集方式

收集内容

收集算法







### 5.数字转换

注意的地方  

**parseInt**   

如果是 以0x开头那  会把代码解析成为16禁止





### 6.运算符会存在短路现象

如果你前面为false  会将后面短路



### 7.void 表达式无结果



8. ### 循环

break  终止循环

coutinue  跳过当前循环 进入下次循环























