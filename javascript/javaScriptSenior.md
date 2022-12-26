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



### 4.分支switch

```js
switch(判断的变量){
    case 值 ：
    xxxx  
    break；
    default：
        xxx
}
```







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



### 13.数组的方法

#### 数组遍历

```js

for of
for(let 变量 of 数组){
    
}

数组.forEach(function(元素，下标，数组本身){
    
})
数组.forEach((元素，下标，数组本身)=>{
    
})
```

#### 数组增删

```js
arr.push(xxx)   向后追加
arr.pop(xxx)    删除最后一项

arr.shift()     删除第一项
arr.unshift(xx) 添加第一项
```

#### 反转数组

```js
//会反转原数组
arr.reverse()
```

#### 排序

```js
//重排原数组   

arr.sort()
//大小排序
				// [a:数组中前一个元素，b：数组中后一个元素]
arr.sort(function(a,b){
      if(a>b){
          //降序   a>b 放到前面  返回小于0的数字 
          return -1
      }else if(a<b){
          //升序   a<b 放到后面 返回大于0的数字
          return 1
      }else {
          //相等返回 0
          return 0
      }
})
```

#### 连接数组

```js
//会产生一个新数组
arr.concat(arr1)
```

#### 数组的裁切

```js
// 会产生新的值      前闭后开  如果想从头选到尾 只写开始
arr.slice(分割开始的下标，分割结束的下标)
```

#### map

```js
arr.map(function(元素，下标，原数组){
    
})
//和forEach区别就是会产生新的数组
```



#### reduce计算

```js
//计算结果  产生新的数据
arr.reduce(function(上一次计算结果，当前变量到的数组元素，当前遍历到的索引，数组本身){})
```



#### 过滤数组

```js
//返回一个新的数组      当这个值返回为true 时才会将这个元素存入  这个数组
arr.filter(function(元素，下标，数组){
    return  true
})
```



### 14.对象 

#### 遍历对象所有的属性

```js
//方法一通过  keys   方法 
var obj = {name:'张三',age:'20'}
   Oject.keys(obj) //[name,age]
//方法二通过  for in  方法
for(键  in 对象){
    
}
```

#### 删除对象中的元素

```js
delete 对象.对象键
```

#### 构造函数

```js
 /*汽车制造  ===>    图纸 （protype） ------->  工厂（构造函数） ----------> 汽车 (实例)   
 注意构造函数首字母大写
  */
function User(name,age){
    //this 所创建的对象所拥有的属性
    this.name = name
    this.age = age
}
var zs = new User('张三','20')

```

#### 函数的getters 和 setters



```js
书写一些逻辑然后再把值返回出来
get:用一个变量的名字然后加一个变量的名字（新的变量）  注意他是一个函数
 var user = {
     firstName = '三'，
     lastName = '张'，
     get fullName(){
         return lastName+firstName 
     },
        //如果只定义了get 那么他就是一个只读的属性  ，如果 给他设置上set 他就是一个可读可修改的值
        //注意 set 这个函数只能接受一个形参 
     set fullName(fullName){
         var [lastName,firstName] = fullName.split(',');
         this.lastName = lastName;
         this.firstName = firstName;
         
     }
 }
 	user.fullName = '李，四'
	console.log(user.fullName) // 李四


构造函数使用 getter 和 setter

function User(name,position){
    this.name = name ;
    this.position = position;
}

var zs = new User('李四','web前端')
Object.defineProperty('getter和setter的对象'，'定义的getter，和setter的名字'，{
                      具体的getter 和setter 函数
                      })
Object.defineProperty('zs','init',{
    get：function(){
        return this.name+''+this.position
    },
    set：funciton(info){
        let [name,position] = info.split(',')
        this.name = name ;
        this.position = position;
    }
})

zs.info = '李四，后台开发'

```

#### 原型

```js
//如果一个函数作为了构造函数那么他new出来的对象会继承这个构造函数的原型
  function User(){
      this.init= function(){
          console.log(this)
      }
  }
  var zs = new User();
//   zs.init()
User.prototype.name='张三'
console.log(zs.name)//张三

//对象的原型
```

#### object.create

```js
 可以让一个对象继承另一个对象
 新的对象可以拥有所继承的对象的所有属性 
 并且还可以拥有自己特有的属性 
 
  var User = {
     firstName = '三'，
     lastName = '张'，
  }
  var zs = new User（）；
  
  var ls = Object.create(zs)
  
  
  
  
  
  
  
  
  
```



#### 原型链

```js
 每个对象的原型都有一个上层的原型 直到遇到null  
 这种链式继承下来的原型就构成了原型链
 
 获得prototype
 
 var xx = Object.getPrototypeOf(对象)
 
```



#### 修改原型指向

```js
function User(){
    
}
Object.setPrototypeOf(要修改的对象，要执向的原型)
Object.setPrototypeOf(zs,User.prototype)
```



#### 值传递和引用传递

```js
array 和 object 引用传递 ，也就是说传递的是内存地址
//数组
function changeArray (arr){
    arr[0] = 5
}
var arry = [1,2,3]
changeArray(array)
console.log(arry)//[5,2,3]

//对象
function changeObj(obj){
    obj.title = 3;
}
var obj = {
    title:1;
}
changeObj(obj);
console.log(obj)//{ title:3}

基本类型是值传递的 也就是说他的值是新的不会影响他之前的值					
//字符串
function testStr(str){
    str = '123';
}
var str = '456'
testStr
conosole.log(str)//456
```



#### 修改this指向

```js
var emp = {
    id:1,
    name:'张三'，
}

   printInfo(dep1,dep2){
    	console.log('姓名'+this.name)
       console.log(dep1,dep2)
	}     
printInfo()// 姓名


call
//call(指向的对象，参数1，参数2，参数3.。。。。)
printInfo.call(emp,'我是dep1','我是dep2')

apply
//apply(指向的对象，参数数组)
printInfo.apply(emp,['我是deo1'，'我是dep2'])

//bind与call是大致一样的 不同于前两项 返回了改变this 指向的新函数    
//他不会立即执行
bind

var empprintInfo = printinof.bind(emp,'我是dep1','我是dep2')
empprintInfo(); 
```



​					

### 15.构造函数

```js
　　定义：通过  new 函数名    来实例化对象的函数叫构造函数。任何的函数都可以作为构造函数存在。之所以有构造函数与普通函数之分，主要从功能上进行区别的，构造函数的主要 功能为 初始化对象，特点是和new 一起使用。new就是在创建对象，从无到有，构造函数就是在为初始化的对象添加属性和方法。构造函数定义时首字母大写（规范）。
  
  
  　对new理解：new 申请内存, 创建对象,当调用new时，后台会隐式执行new Object()创建对象。所以，通过new创建的字符串、数字是引用类型，而是非值类型。
```





### 16.柯里化

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



#### 17.柯里化优势

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



### 18.高阶函数

```js
　　高阶函数：英文叫Higher-order function。JavaScript的函数其实都指向某个变量。既然变量可以指向函数，函数的参数能接收变量，那么一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数。
```



### 19.class

es6中添加

#### 1.创建一类

```js
class User{
     //构造函数 必须通过constructor
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

var zs = new User('张三'，20)
```

#### 2.成员对象

```js
class User{
     //构造函数 必须通过constructor
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    signIn(){
        console.log(this.name+this.age)
    }
    get info(){
        return this.name + '' + this.age
    }
    set info(info){
       let [name,age] = info.split(' ')
       this.name = name;
        this.age = age;
    }
}

var user = new User('张三'，20);
console.log(user.name)//张三
console.log(user.age)//20


```

#### 3.继承

```js
class Zs extends User{
    constructor (name,age,work){
        //相当于在使用父类中的本身 super 
        super(name,age);
        
        this.work = work;
        singin(){
            super.sigIn();
            console.log('额外的内容')
        }
    }
}
var zhangsan = new Zs（'zhangsan',20,'前端'）
```

#### 4.面向对象-成员变量（新的只有部分浏览器支持）

```js
 class User{
     //成员变量只能初始化的时候给他一个值不好后面的处理 
     age =20;
     constructor(name){
		this.name ='员工姓名'+name
     }
 }

```



#### 5.静态成员

```js

属于类但是不属于实例对象
class Phone{
    static name = '手机'; 
}

let nokia = new Phone();
console.log(nokia.name)//undefined
console.log(Phone.name)//手机
```



### 20.字符串

#### 1.字符串转义

```js
str  = '你\'好'//你'好
str  = '你\n好'// 你 换行 好
str  ='你\t好' // 你    好

```

#### 2.字符串的方法

```js
str  = '你好光头强'；
//返回指定位置的字符
str.charAt(1) // 好

//裁剪
 str.slice(0,2) //你好
str.slice(3)//头强   如果没有指定结束那么就直接到最后
str.slice(0,-1) //你好光头
str.slice(-3,-1)//好光头
str.slice(4,1)//     如果开始大于结束就会返回一个空字符

//裁剪2
str.substring(0,2) //你好
str.substring(0,-1) //    不能接受负数
str.slice(4,1)//  好光头强   如果开始大于结束掉换位置

//拼接
var str1 = '你好'，
var str2 = '世界'
str1 + str2
str1.concat（str2）

```



#### 2.模板字符串

```js

function user (name){
    console.log(name)
}
user`lisi`
```



### 21.正则

#### 1.书写

```js

var str = 'where when what';
//字面值
var re = /wh/
//表达式
var re2 = new RegExp('wh')
console.log(re.exec(str))  //匹配到的结果
conosle.log(re.text(re)) //返回布尔类型
```

