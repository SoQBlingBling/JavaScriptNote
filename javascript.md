### console使用

#### 1.输出信息

```js
   console.log('消息内容！'); //输出普通信息
　　console.info('消息内容！'); //输出提示信息
　　console.error('消息内容！');//输出错误信息
　　console.warn('消息内容！'); //输出警告信息
```



#### 2.数据表格化

```js
　var thisObj = [
　　　　{ name: 'quber', email: 'qubernet@163.com', qq: 757200834 },
　　　　{ name: 'xm', email: 'xm@126.com', qq: 757200833 },
　　　　{ name: 'jack', email: 'jack@sina.com', qq: 757200832 },
　　　　{ name: 'maer', email: 'maer@gmail.com', qq: 757200831 }
　　];
　　console.table(thisObj);
```

#### 3.清除 控制台

```js
console.clear();
```

#### 4.输出节点

```js
 var mytable = document.getElementById('mytable');
  console.dirxml(mytable);   
```

#### 5.将对象以树状结构展现

```js
var thisObj = {
　　　　name: 'quber',
　　　　age: 26,
　　　　fn: function() {
　　　　　　alert('quber');
　　　　}
　　};
　　console.dir(thisObj);
```

#### 6.当表达式为false时，输出信息

```js
var testObj = false;
　　console.assert(testObj, '当testObj为false时才输出！');
```

#### 7.统计代码执行的次数

```js
　　function testFn() {
　　　　console.count('当前执行的次数');
　　}
　　testFn();
　　testFn();
　　testFn();
```

#### 8.分组输出

```js
　　console.group('分组1');
　　console.log('分组1-1111');
　　console.log('分组1-2222');
　　console.log('分组1-3333');
　　console.groupEnd();

　　console.group('分组2');
　　console.log('分组2-1111');
　　console.log('分组2-2222');
　　console.log('分组2-3333');
　　console.groupEnd();
```

#### 9.console.time 计时开始,console.timeEnd 计时结束

```js
console.time('Array initialie');
var array = new Array(1000000);
for (var i = array.length - 1; i >= 0; i--) {
  array[i] = new Object();
};
console.timeEnd('Array initialie');
```



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



### 8.循环

break  终止循环

coutinue  跳过当前循环 进入下次循环



### 9.方法的默认参数

```js
funciton add(a=2,b=3){
    return a+b
}
add()
```



### 10.自动执行函数

```js
(function(){})()
(方法)()
```



### 11.回调函数

```js
一段代码执行完要调用的函数
一般这个函数是作为另一个函数的参数传进去，然后再在另一个函数里面去调用它
function request(cb){
    console.log('发送请求');
    cb();
    console.log('请求结束');
}
function callback(){
    console.log('执行回调')
}
request(callback);
```





### 12.创建数组

```js
var arr1 = [1,2,3];
var arr2 = new Array(1,2,3)   //构造函数
var arr3 = Array(1,2,3)
var arr4 = Array.of(1,2,3)

```



### 13.数组的遍历

```js
for of
for(let 变量 of 数组){
    
}

数组.forEach(function(元素，下标，数组本身){
    
})
数组.forEach((元素，下标，数组本身)=>{
    
})
```



### 14.构造函数

```js
　　定义：通过  new 函数名    来实例化对象的函数叫构造函数。任何的函数都可以作为构造函数存在。之所以有构造函数与普通函数之分，主要从功能上进行区别的，构造函数的主要 功能为 初始化对象，特点是和new 一起使用。new就是在创建对象，从无到有，构造函数就是在为初始化的对象添加属性和方法。构造函数定义时首字母大写（规范）。
  
  
  　对new理解：new 申请内存, 创建对象,当调用new时，后台会隐式执行new Object()创建对象。所以，通过new创建的字符串、数字是引用类型，而是非值类型。
```





### 15.柯里化

```js
是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。

// 普通的add函数
function add(x, y) {
    return x + y
}

// Currying后
function curryingAdd(x) {
    return function (y) {
        return x + y
    }
}
```

#### 柯里化优势

##### 1.参数复用

```js
// 正常正则验证字符串 reg.test(txt)

// 函数封装后
function check(reg, txt) {
    return reg.test(txt)
}

check(/\d+/g, 'test')       //false
check(/[a-z]+/g, 'test')    //true

// Currying后
function curryingCheck(reg) {
    return function(txt) {
        return reg.test(txt)
    }
}

var hasNumber = curryingCheck(/\d+/g)
var hasLetter = curryingCheck(/[a-z]+/g)

hasNumber('test1')      // true
hasNumber('testtest')   // false
hasLetter('21212')      // false
面的示例是一个正则的校验，正常来说直接调用check函数就可以了，但是如果我有很多地方都要校验是否有数字，其实就是需要将第一个参数reg进行复用，这样别的地方就能够直接调用hasNumber，hasLetter等函数，让参数能够复用，调用起来也更方便。


```

##### 2. 提前确认

```js
var on = function(element, event, handler) {
    if (document.addEventListener) {
        if (element && event && handler) {
            element.addEventListener(event, handler, false);
        }
    } else {
        if (element && event && handler) {
            element.attachEvent('on' + event, handler);
        }
    }
}

var on = (function() {
    if (document.addEventListener) {
        return function(element, event, handler) {
            if (element && event && handler) {
                element.addEventListener(event, handler, false);
            }
        };
    } else {
        return function(element, event, handler) {
            if (element && event && handler) {
                element.attachEvent('on' + event, handler);
            }
        };
    }
})();
//换一种写法可能比较好理解一点，上面就是把isSupport这个参数给先确定下来了
var on = function(isSupport, element, event, handler) {
    isSupport = isSupport || document.addEventListener;
    if (isSupport) {
        return element.addEventListener(event, handler, false);
    } else {
        return element.attachEvent('on' + event, handler);
    }
}


我们在做项目的过程中，封装一些dom操作可以说再常见不过，上面第一种写法也是比较常见，但是我们看看第二种写法，它相对一第一种写法就是自执行然后返回一个新的函数，这样其实就是提前确定了会走哪一个方法，避免每次都进行判断。


```

##### 3. 延迟运行

```js
Function.prototype.bind = function (context) {
    var _this = this
    var args = Array.prototype.slice.call(arguments, 1)
 
    return function() {
        return _this.apply(context, args)
    }
}
像我们js中经常使用的bind，实现的机制就是Currying
```



#### 性能

curry的一些性能问题你只要知道下面四点就差不多了：

- 存取arguments对象通常要比存取命名参数要慢一点
- 一些老版本的浏览器在arguments.length的实现上是相当慢的
- 使用fn.apply( … ) 和 fn.call( … )通常比直接调用fn( … ) 稍微慢点
- 创建大量嵌套作用域和闭包函数会带来花销，无论是在内存还是速度上



### 16.高阶函数

```js
　　高阶函数：英文叫Higher-order function。JavaScript的函数其实都指向某个变量。既然变量可以指向函数，函数的参数能接收变量，那么一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数。
```

