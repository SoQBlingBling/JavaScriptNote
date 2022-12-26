### 1.数据类型



#### 	1.基本数据类型 

- **string  、number 、 boolean 、 null  、 undefined**



####  2.对象(引用)类型

- **object 、 array 、function **



#### 3.判断



##### typeof

- 检测数据类型

  可以检测：string  、number 、 boolean 、 null  、 undefined 、 object  、function 、 symbol

  不能检测： array 、 object 、null 都为object

##### instanceof

  	判断 a 是否为 b 的实例

​	 专门用来判断对象数据的类型：object 、 Array 、 Function

​	 可以判断 undefined 和 null

#### 4.undefined 和null 的区别

​	undefined 代表没有赋值

​	null 代表赋值了只是赋了个空值

#### 5.什么时候给变量赋值为null呢

```js
var a = null //将 a 指向一个对象，但对象此时还没有确定
a = null //让 a 指向的对象成为垃圾对象
```

#### 6.严格区分变量类型与数据类型

基本类型： 保存基本类型数据的变量

引用类型：保存对象地址值的变量



数据对象：基本类型 、对象类型

#### 7.内存分配

在编译阶段，除了声明变量和函数，查找环境中的标识符这两项工作之外，还会进行内存分配。不同类型的数据会分配到不同的内存空间：

1. 栈内存：引擎执行代码时工作的内存空间，除了引擎，也用来保存基本值和引用类型值的地址。
2. 堆内存：用来保存一组无序且唯一的引用类型值，可以使用栈中的键名来取得。



#### 8.赋值与赋址

引擎不能直接操作堆内存中的数据，这就造成了对同一个变量赋不同类型的值，会出现完全不同的效果：为一个变量赋基本值时，实际上是创建一个新值，然后把该值赋给新变量，可以说这是一种真正意义上的" 赋值 “；为一个变量赋引用值时，实际上是为新变量添加一个指针，指向堆内存中的一个对象，属于一种” 赋址 "操作。

  

```js
//基本值
var a = 1;
var b = a;
a = 2;
console.log(a); //输出：2
console.log(b); //输出：1

//引用值
//变量 c 和 d 指向堆中的同一个数组
var c = [0, 1, 2];
var d = c;
c[0] = 5;
console.log(c); //输出：[5, 1, 2]
console.log(d); //输出：[5, 1, 2]

```



### 2.对象

#### 1.什么是对象

代表现实中的某个事物，是该事物在编程中的抽象

多个数据的集合体（封装体）

用于保存多个数据的容器

#### 2.为什么要用对象

便于对多个数据进行统一管理

#### 3.对象的组成

##### 1）属性

- 代表现实的事物状态数据
- 由属性名和属性值构成
- 属性名都是字符串类型，属性值是任意类型

##### 2）方法

- 代表显示事物的数据行为
- 是特别的属性==>属性值是函数

#### 4.如何访问对象内部数据？



1）

属性名：编码简单，但有时不能用

['属性名']：编码麻烦，但通用



2）

什么时候必须使用['属性名']的方法

属性名不是合法的表示名

属性名不确定

对象中key一定是字符串





### 3.函数说明

#### 1.什么是函数

具有特定功能的n条语句

只有函数是可执行的，其他类型是不可执行的

#### 2.为什么要使用函数

提高代码复用率

便于阅读和交流

#### 3.如何定义函数

```js
//1,函数自调用 === window.函数调用
var fun = function(){}
function fun (){
    
}
//2.回调函数
//你定义的，没有直接调用 但最终它执行了（在特定的条件或时刻）
settimeout(function(){},2000)
//3.构造函数
function Person (name,age){
    this.name = name;
    this.age = age;
}
var a1 = new Person('张三'，20)
//构造函数大小写都可以
//4.call 、 apply
改变函数中this的指向
//5.立即调用函数 iief
(function(){}})()
特点：只执行一次 
代码执行到函数执行的时候执行
内部的数据是私有的
```



#### 4.如何调用执行函数



### 4.this说明

#### 1.this 是什么？

是一个关键字  一个内置的引用对象

在函数中都可以使用this

this 代表当前调用函数指代对象

在定义函数的时候this 还没有确定 只有在执行时才动态确定（绑定的）

#### 2.如何确定this 的值？

```js


test（）

obj.test()

new test()

test().call   test.apply()    test.bind()
```



#### 2.new 操作符

```js
new function(){
    
}
语法:new function(){
    
}
1.创建空对象
2.执行函数
3.确认this 的指向
4.返回执行的结果
function Persion (name,age){  1.创建空对象
2.执行函数
3.确认this的指向
    this.name = name;
    this.age = age
}
4.返回结果
var persion1= new Porsion('zhangsan',20)
```



### 5.原型链

#### 1.概念

- 原型就是一个对象

- 每个函数都都有一个prototype的属性，该属性指向的是当前函数的原型对象

- 每个实例对象都有一个_ _ proto _ _的属性，该属性指向的是当前实例对象的隐式原型对象
- 构造函数的显示原型对象 ===当前构造函数的实例对象的隐式原型对象

#### 2.原型链

- 当查找对象的属性的时候在自身找，如果自身没有沿着_ _ proto _ _这条线去找如果还是没有找到就是undefined
- _ _ proto _ _ 这条链就是原型链

#### 3.扩展原型链

```js
function Fun(){
    
}
Fun.xxx = 123;
console.log(Fun)//function Fun（）{}
console.log(Fun.xxx)//123    
//函数对象



var obj = {}   == var obj = new Object()
// 所以obj = {}   也可以叫做实例对象 

var fun = new Fun()
//创建 fun实例对象 Fun是构造函数
```



### 6.instanceof运算符

- typeof：
  - 可以区别：数值、字符串、布尔值、undefined、function
  - 不能区别：null与对象、一般的对象与数组

在检测 null 与 array 、object  的时候都会返回一个object



- instanceof：
  - 专门用来判断对象数据的类型：Object、array与function
  - 可以判断 undefined 与null

```js
//语法 a instanceof b 判断 a是否是b的实例

```



### 7.执行上线文，与执行上下文栈

#### 1.变量提升（预解析）

定义：

**js引擎在js代码正式执行之前会做一些预处理工作**

- 1.找var 和function 关键字
- 2.找到var 以后提前将var 后面的变量提前声明但是不赋值
- 3.找到function 之后定义一个函数



#### 2.执行上下文

定义：

**js引擎在js代码正式执行之前会先创建执行环境，在执行环境中作预处理工作**

工作内容：

- 1.创建一个空对象

- 2.该空对象用于收集变量，函数，函数的参数（找var 和function）

- 3.创建作用域链
- 4.确认this 的指向



栈内存：  先进后出,后进先出

函数执行完出栈

1.在全局代码执行前，js引擎就会创建一个栈来储存管理所有的执行上下文对象

2.字全局执行上下文（window）确定吼，将其添加到栈中（压栈）

3.在函数执行上下文创建后，将其添加到栈中（压栈）

4.当前函数执行完后，将栈顶的对象移出（出栈）

5.当所有的代码执行完后，栈中只剩下window



预先处理函数再去处理变量如果函数已经存在就会被忽略

```js
    console.log(a)//function a（）{}   

        var a =3;
        function a() { }
 console.log(a)//3
```

变量预处理 in 操作符

```js
判断对象是否为数组/对象的元素/属性：
格式：（变量 in 对象）......注意，，，
当“对象”为数组时，“变量”指的是数组的“索引”；

　　当“对象”为对象是，“变量”指的是对象的“属性”。
var arr = ["a","b","2","3","str"];  
var result = ("b" in arr);  
var result1 = (4 in arr);  
document.write(result+"<br>");  
document.write(result1+"<br>");  

false  
true  

var obj={  
         w:"wen",  
         j:"jian",  
         b:"bao"  
           
    }  
      
var result=(2 in obj);      
var result1=("j" in obj);  
  
document.write(result)+"<br/>";  
document.write(result1)+"<br/>"; 

false  
true 
```



### 8.作用域

#### 1.理解

就是一块‘地盘’，一个代码所在的区域

他是静态的（想对于上下文对象），在编写代码时就确定了



代码执行的区域

#### 2.分类

##### 

全局作用域

函数作用域

没有块级作用域（es6有了）

#### 3.作用

隔离变量，不同作用域下同名变量不会有冲突



防止污染全局变量

隔离变量



#### 4.作用域什么时候产生

代码定义的时候



#### 6.作用域什么时候销毁

局部销毁：函数执行完毕

全局销毁：关闭浏览器



#### 7.作用域链

查找（使用）变量的时候会在当前作用域查找，如果当前的作用域没有向外层作用域查找直到找到这个变量，如果没有  报错  xxx is not defined



### 9.闭包

什么是伪数组：

具备数组的一般特性 可以通过下标取值，还有length属性但是没有数组的一般方法



闭包的作用就是保存外部函数的局部变量（前提就是内部一定是在使用外部变量）



定义:

#### 1.闭包就是闭合的容器

我们可以认为闭包就是一个对象 {key:value}

#### 2.闭包的形成条件

- 函数嵌套

- 内部函数引用外部函数的局部变量
- 外部函数调用

#### 特点：

- 闭包里保存的变量一定是内部函数引用外部函数的变量，如果没有使用的外部变量在外部函数执行就销毁释放内存了

- 闭包在使用的时候通常会将内部的函数返出去
- 会延长外部函数局部变量的生命周期

#### 3.闭包的作用

- 延长外部函数的局部变量的生命周期
- 从外部访问函数内部的局部变量

#### 4.缺点

- 占内存
- 不及时清除闭包很容易造成内存溢出

#### 5.使用闭包的时候如何避免闭包带来的坏处

- 能不用就不用

- 及时清除闭包  

- ```js
  function a(){
      var num  = 10 ;
      return function b(){
          console.log(num)
      }
  }
  
  var c = a();
  c();
  c();
  c();
  c();
  c = null
  
  ```



#### 6.闭包的使用场景

- 解决循环遍历加监听的问题
- 将内部的函数返出来



### 10.同步和异步

#### 同步

- 同步会阻塞后面代码的执行	

- 同步没有回调

#### 异步

- 异步是非阻塞的
- 异步一定对应的有回调函数

### 11.对象的创建

套路:通过工厂函数动态创建对象并返回

适用场景：需要创建多个对象

```js
function Person( name,age){
    return{
        name:name,
        age:age
    }
}
var person = new Person('李四'，20)
```

自定义构造函数模式

套路：自定义构造函数，通过new创建对象

适用场景：需要创建多个类型确定的对象

问题：每个对象都有相同的数据，浪费内存

```js
function Person(name,age){
    this.name = name
    this.age = age 
    this.eat = function(){
        console.log('吃东西')
    }
}
Person.prototype.eat= function (){
    console.log('吃东西')
}
    var person = new person('kobe',42)


```

- 差异：

  - 1.object构造函数方式，缺点：语句太多，流程太啰嗦

  - 2.对象字面量，优点：书写简单   缺点：有太多重复的代码

  - 3.工厂模式：优点：避免重复的代码 ，可以批量生产对象 缺点：不能明确区分属于那一类

  - 自定义构造函数： 优点：可以生成多个实例对象，缺点：如果直接定义给实例本身太占内存

- 原型继承：

  - 原型继承：
  
    - 子类原型===父类的实例 例如：Child.protype = new parent()
  
    - 注意点：以上的步骤会导致子类原型的构造器属性丢失，所以需要手动条件构造器属性
  
    - child.protype.constructor = child
  
  - 借用构造函数继承（不是真正意义上的继承）
  
    - 在子类的构造函数中调用父类的构造函数
    - 注意点：父类构造函数的this 指向问题
    - 解决方案： 通过 call / apply 强制修改this 的指向 -----》当前子类的实例对象

### 12.原型继承



```js
function Animal (name,age){
    this.name = name;
    this.age = age
}
function Cat(name,age){
    this.name = name;
    this.age = age
}
var tom = new Cat('tom',3)
tom.eat();
tom//自身没有
tom.__proto__// 隐式原型对象找 === Cat.prototype 原型对象
// 没有的话继续往下找
tom.__proto__.__proto__ === object.protype

//最简单的方法就是，但是不考虑因为外面有个大类
Cat.protype.eat = function(){
    console.log('吃')
}

//tom.__proto__.__proto__.__proto__ === Object.prototype 显示原型对象
//让子类的原型成为父类的实例

Cat.prototype = new Animal()
//在使用原型继承的时候，注意矫正子类的构造器属性
Cat.prototype.constructor = Cat;
```

#### 2.组合继承、借用构造函数继承

借用构造函数继承（假的）

1.套路：

- 定义父类型的构造函数
- 定义子类型的构造函数
- 在子类型构造函数中调用父类型的构造函数

2.关键：

- 在子类型构造函数中通用super（）调用父类型构造函数

```js
function Animal (name,age){
    this.name = name;
    this.age = age
}
function Cat(name,age){
    Animal.call(this,name,age)
}

var tom = new Cat('tom',20)
Cat.prototype = new Animal()
Cat.prototype.constructor = Cat
```



### 13.垃圾回收机制

garbage collection（GC）

相当于一个循环机制（反复的去扫代码）

- 1.计数清除  （ie低版本，老的chrome）

 看内存的地址身上有几个指针指向，当一块内存地址身上指针个数为0，说明这块内存马上就要回收释放



弃用的原因：

```js
var obj = {
    a:obj1
}
var obj1{
    b:obj
}
obj = null;
obj1 = null
```



- 2.标记清除

进入到代码执行的环境以后见此到需要使用的变量就再其身上加一个进场标记，在代码执行完的时候就会再之前加标记的变量身上再添加一个出场标记 

### 14.进程 和 线程

1.进程：程序的一次执行，它占有一片独有的内存空间

2.线程：cpu的基本调度单位，是程序执行的一个完整流程

3.进程与线程

* 一个进程中一般至少有一个运动的线程：主线程
* 一个进程中也可以同时运行多个线程，我们会说程序是多线程运行的
* 一个进程内的数据可以供其中的多个线程直接共享
* 多个进程之间的数据是不能直接共享的



### 15.js的线程

1. 代码从上至下依次执行
2. 同步&异步
3. 同步代表  alert（） 、console 赋值语句
4. 异步代表： 定时器、 事件的回调





浏览器的管理模块

主线程    ---------》浏览器管理模块

​    						dom事件管理模块

​							ajax 请求管理模块

​							定时器管理模块

​									-

​									-

​									-

事件轮询（event loop）

callbackqueue    ：dom 事件回调、ajax请求回调、定时器回调







- 事件循环机制
  - 1.js是单线程的
  - 2.所有的js代码都会在主线程执行
  - 3.同步任务加载即执行
  - 4.异步任务不会立即执行，而是会交给对应管理模块
  - 5.管理模块一直在监视异步任务是否满足条件，如果满足条件就会对应的回调放入callback queue（回调队列）
  - 6.主线程上的同步任务执行完以后会通过event loop（事件轮询机制）询问callback queue
    - 查看事件是否有可能执行的回调函数，如果有将回调钩到主线程上执行
    - 如果没有待会再来问



操作对象属性优先级高于普通的赋值操作



### 16.严格模式和json对象

- 声明变量必须使用var 
- 禁止自定义的函数中this指向window
- 创建eval作用域
- 对象不能有重名的属性

```js
use strrict
var a = 123
eval('var a = 345 alert(a)')//  345
console.log(a)//123

```



### 17.object.create

- object.create(protyep,[descriptorss])
- 作用：以指定对象为原型创建新的对象
- 为新的对象指定新的属性，并对属性进行描述
  - value:指定值
  - writable：标识当前属性值是否可以修改，默认false
  - configurable：标识当前属性是否可以被删除，默认为false
  - enumerable:标识当前对象是否可以被  for in 枚举 默认false

18. ### object.defineProperties

object.defineproperties(protype,[descriptorss])

- 作用: 为指定对象定义扩展多个属性

  - get：用来获取当前属性值的回调函数
  - set：修改当前属性值的触发的回调函数，并且实参为修改后的值

- 存取器属性：setter，getter 一个用来存值一个用来取值

  ```js
  var obj = {
      name:'zs'
      age:20
  }
  var sex = '男'
  Object.defineproperties(obj,{
      sex:{
          get:function(){//设置，获取扩展属性值的时候被调用
              return sex
              
          },
          set:function(value){//当修改扩展的属性值的时候，set方法自动被调用
              sex = value
      	
  }
      }
  })
  
  
  方法二:
  Object.defindeproperty(object,'sex'{
    get:function(){
       return sex
  	},
      sex:function(value){
          sex = value
      }
                         })
  ```

  