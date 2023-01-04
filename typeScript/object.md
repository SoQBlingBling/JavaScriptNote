### 1.简介
- TS是由微软2012年开发的一款开源的编程语言
- TS是JS的超集，遵循最新的ES6 、ES5规范。TS扩展了JS的语法
- 在JS的基础上，为JS添加了**类型支持** 

### 2.劣势
- 短期投入到工作中可能会增加工作成本
- 和有些库契合的不是很完美

### 3.安装
> npm install -g typescript

> cnpm  install -g typescript

>yarn global add typescript 

```npm
	解决TS和JS冲突文件
	tsc --init
	编译文件
	tsc 文件名.ts
	自动编译
	tsc 文件名.ts --watch  or tsc 文件名.ts -w
	发出错误
	tsc -noEmitOnError xxx.ts

```



### 4.运行启动时


```js
 1.npm init ===>获得package.json文件
 2.npm install --save-dev lite-server ===> 配置新的启动指令
 "script":{
	 "start":"lite-server"
 }
 
```

### 5. 类型赋值和类型推断
- 显式类型
```ts
 //显式类型   将来去调用的时候必须的把类型传递正确
 function greet (person:sting,date:date){
	 console.log(`hello ${person},today is ${date.toDateString()}!`)
 }
```

- 隐式类型
```ts
	//隐式类型 他会根据这个的值的类型去推断这个变量名的类型
	let msg = 'hi world'
	msg = 'hello world'
	msg = 123;
```

### 6.降级编译
```ts
// 编译出来的代码会根据这个参数来输出js版本
	 tsconfig.json :
	 "target":"es5"
```
### 7.严格模式
```ts
//不同的用户 在使用的时候希望的严格模式的标准是不同的
tsconfig.json:
//类型和空的检验
"strict":"true",
//类型的检验 参数在代码中使用的值
"noImplicitAny":true,
//空检验
"strictNullChecks":true
```
 ### 8.类型
 注意 js 和 ts 不能同时打开不然会产生会出现有关函数重复实现的错误 
**❗ TypeScript中的核心基元类型都是小写的！**


| 类型 | 示例 | 说明 |
| :---------: | :---------: |:---------: |
| string | 'hi',"hi",\`hi\` | 表示字符串 |
| number | 5,-5,0.5 | 表示数字 |
| boolean | true/fakse | 只有true和false两个值 |
| [[object#^3ff302\| 对象]]  |  {age:20}  | 任何javascript 兑现类型 |
|  [[object#^bb09da\| 数组]] | type[] \| Array\<type\> | 这样创建出来的数组元素只能是type类型的值 |
|   联合类型（union）  |   type \| type |  两个或者多个类型组成的类型 |
|  [[object#^f4f356\|元组(tuple)]] |  [strig,number] | 长度固定类型固定的数组叫做元组|
|  [[object#^99303a \|枚举(enum)]] | enum{new,old} |  由typescript自动枚举的全局常量标识符添加 |
|  [[object#^e46cb2 \| any]]  |     *    | 这意味着可以在any类型上储存任何的值 |
|  [[object#^9b43be \| 数值类型（Literal）]]   |   text:20 \| 30   |  将推断的类型改为推断的固定的值  |
|  [[object#^031c86 \| 自定义类型or类型别名]]  |  type Combinable = number  |  可以用type定义后面的变量来替代类型 |
|  [[object#^44dd0a \| void]] |   function ():void{} | 表示函数没有返回值  |
|  [[object#^621a8c \| 函数]] |   ()=>  |  当变量声明为函数时|
|  [[object#^38622d \| unknown]]  |       let a:unknown |   当将一个未知类型的值赋值给已知类型的变量 |
| [[object#^cfd780 \| never]] |  let a:never  | 表示永远不存在的值的类型|
 #对象 ^3ff302     
```ts
/* 隐式 */
let person = {
    name:'SoQ',
    age:24,
}
/* 显式 */
// 如果显式定义时使用具体的值那么在赋值时只能使用定义的值 如果使用其他值就会报错
let person1:{
    name:string,
    age:30
} = {
name:'Bling',
age:30
}
```

#嵌套对象和类型 
```ts
const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}
/*----------------------------------------------*/
{
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}
```
#array ^bb09da
```ts
	let favoriteActivitives:string = ['hello','hi','good'];
	let arr:Array<number> = [1,2,3,4] 
```
- #元组 ^f4f356
```ts
// 元组中 长度和单位必须对应
let role:[string,number] = ['hello',123]
```
 #枚举 ^99303a
```ts
 // 比如在角色管理系统中我们可能会用 某个字段去判断用户身份 但是可能在判断中出现错误
 // 所以我们使用枚举
 let admin = 'admin';
 let user = 'read only user';
 let author = 'author'

//使用枚举的写法为
//注意首字母大写  
//将默认给值 赋值为 0，1，2
 enum Role {admin, user , author}
//如果不想这样修改可以手动修改
enum Role {admin=1,user=2,author = 3}
	
```

#any ^e46cb2
```ts
/*
尽量避免使用any类型他会剥夺ts所带来的便利，
所以如果真的有一些值一些数据你真的不知道那种数据存储在哪里 可以作为后备使用
*/
let array:any[] = [1,'hello',false] 
```

 #数值类型 ^9b43be
```ts
 let variable: 'hello' | 123  
 if (variable == 'hello'){  
    console.log('hello')  
 } else if (variable ==123) {  
    console.log(123)  
 }
  
```

#自定义类型 ^031c86
```ts
//类型别名  
//通过 type关键字 可以进行对类型重新定义名字  
type numberType = number;  
let numbers:numberType = 123;  
type mytypes = 123 | `hello`;  
let myvalue:mytypes  
if (myvalue == 123) {  
  
} else if (myvalue =='hello') {  
      
}
```

#void  ^44dd0a
```ts
	function printAdd (input1:number,input2:number):void{
		console.log(input1+input2)
	}

/* 
函数中返回undefined 和void的区别
	1. 如果函数中没有返回数据那么使用void
	2. 如果函数中有return但是没有返回值那么就是undefined
*/
//1.
	function printAdd (input1:number,input2:number):void{
		console.log(input1+input2)
	}
//2.
	function printAdd (input1:number,input2:number):undefined{
		console.log(input1+input2)
		return;
	}
```

#function^621a8c
```ts
//函数类型, 允许我们具体描述我们要在什么地方使用哪种类型的函数｡
	function add(a:number,b:number){
		return a+b
	}
let addNumber = Function;
let addNumber:(a:number,b:number)=> number

//当函数作为回调函数
function testCallBack(num1:number,num2:number,fn1:(n1:number)=>void){

    let sum = num1 +num2

    let cb =  fn1(sum)

    console.log(cb)

  

}

testCallBack(10,20,(value)=>{

    console.log(value)

    return value

})
```

#unknown ^38622d
```ts
	// unknown, 来把一个未知值赋给一个固定类型的值,unknown是比any更好的选择, 如果不能准确的告诉你里面存储的是什么类型, 它可能是一个数字, 也可能是一个字符串,
```

#never ^cfd780
```ts
 //never`Never` 类型可以用来表示会抛出异常或根本不会有返回值的函数[表达式]或箭头函数表达式的返回值类型；被永不为真的类型保护所约束时的变量也可用 `Never` 来表示。
```

### 9.模块
通过指令 `tsc --init` 来创建一个tscofig.js 文件来进行对ts文件的管理
此时就可以通过 `tsc` 来编译此文件夹中所有的ts文件  or  通过`tsc --watch`/ `tsc -w`实时监听文件夹中ts文件的变化
#### 9-1.exclude  or include or files
在tsconfig.js 中 compilerOptions 这个键后面添加 exclude  这个键的值是一个数组可以在这个数组中输入文件的路径。 当你整个文件进行tsc 编译时这几个文件时不包含在编译中的
- exclude

```js
{

  "compilerOptions": {},
  "exclude":[
  'xx.ts' 
  ]
}

//exclude 中我们可以通过*来筛选需要忽略编译的文件

  `*`：将忽略任何具有的文件｡
  `?`：匹配任一字符（包括目录分隔符）
  `**/`：这意味着任何文件夹中具有该模式的任何文件都将被忽略｡
  `/*`:一级目录中的文件
  `/**`:二级目录中的文件

{

  "compilerOptions": {},
  "exclude":[
  '*.dev.ts' 
  ]
}

```

- include
```js
这里没有列出的任何文件都不会被编译
exclude的优先级比include的优先级要高
{

  "compilerOptions": {},
  "include":[
  '*.dev.ts' 
  ]
}
```

- files
```js
它允许你指向单个文件, 有点像include,不同的是你不能指定你想包含的整个文件夹,
files 和 include 同时存在时会合并这两个包含文件
```

- extends
```js
导入配置文件
在extends中可以继续书写已经书写的键来覆盖导入的键
	{
		"extends":"tsconfig.js"
	}
```

- compileOnSave
```js
在保存文件的时候进行编译
目前vscode 不支持这个选项
 {
	 compileOnSave
 }
```

#### 9-2.设置编译目标

```js

    "target": "es2016",//此选项就是告诉typescript用哪个javascript版本进行编译
    "module": "commonjs",// 暂时跳过 了解ts模块后才会又意义
    "lib": [],// 此选项是允许指定ts 知道那些默认的对象和功能
    "allowJs": true,                         
    "checkJs": true,
	  
```

```js
{

  "compilerOptions": {
   // 生成相应的 '.map' 文件
  "sourceMap": true, 
  //增量编译 第一次编译之后可以生成一个存储编译信息的编译文件 再次编译的时候会根据这个文件来进行增量的编译 提高编译的速度
     "incremental": true,                           
	//启用允许TypeScript项目与项目引用一起使用的约束——指定文件用来存储增量编译信息,默认是tsconfig.tsbuildinfo
    "composite": true,                           
	//增量编译文件的存储位置
     "tsBuildInfoFile": "./.tsbuildinfo",         
	//打印诊断信息
     "disableSolutionSearching": true,             
    "target": "es2016",                             
	//ts 需要使用的类库 类似es5 es6 
    "lib": [],                                     
	// 用于react 编译
     "jsx": "preserve",                              
    "module": "commonjs",                                
	// 指定文件输入的目录（用于输出）控制输出目录结构
    "rootDir": "./",                             
	// 模块解析策略
     "moduleResolution": "node",            
	// 解析非相对模块的基地址
    "baseUrl": "./",                       
	//路径映射 相对于baseurl
     "paths": {},                          
	//将多个目录放在一个虚拟目录下 用于运行
     "rootDirs": [],                                  
	//允许在模块中访问umd全局变量
     "allowUmdGlobalAccess": true,                  
	//允许编译js文件（js、jsx）
     "allowJs": true,                                   
     //允许在js文件钟报错 通常与allowJS一起使用 
     "checkJs": true,                                 
	// 生成声明文件 这个是在使用composite 时必须的
    "declaration": true,                           
	//只生成声明文件
    "emitDeclarationOnly": true,                 
	//指定输出的目录
    "outDir": "./",          
	//删除注释
    "removeComments": true,                         
	//降低编译器的实现
     "downlevelIteration": true,           
	 //不生成helper 函数
    "noEmitOnError": true,                        
	//生成文件的路径
     "preserveValueImports": true,                    

	// 允许import 导入  而小盘export 导出
    "esModuleInterop": true,                     
	//开启所有严格的类型检测
    "strict": true,                                 
	// 不允许把 null undefined 复制给其他类型的变量
    "strictNullChecks": true,         
	// 不允许函数参数双向协变
    "strictFunctionTypes": true,           
	// 严格的bind/call/apply 检查
     "strictBindCallApply": true,                      
    //不允许this有隐式的any类型
     "noImplicitThis": true,                           
	"useUnknownInCatchVariables": true,        
	 //在代码钟注入 'user strict'
	  "alwaysStrict": true,    
	 // 不允许隐式的any类型
     "noUnusedLocals": true,
     //未读取函数参数时引发错误                  
     "noUnusedParameters": true,   
     //检测只声明未使用的局部变量
     "noUnchecked":true,                 
    // 每个分支都有返回值
    "noImplicitReturns": true,    
	 // 防止switch语句贯穿
     "noFallthroughCasesInSwitch": true,
     //出错后不能继续编译出js文件     
     "noEmitOnError": false,         
  },

  "exclude": [

    "a.ts"

  ]

}
```

### 10.class
#### 1.class构建，class复制
```ts
//class 首字母大写
class UserItem {

    userName:string

    constructor(n:string){

        this.userName = n

    }

    describe(this:UserItem){

        console.log(this.userName)

    }

}

let zs = new UserItem('张三')

console.log(zs)

zs.describe()

const accountingCopy = {

    userName:'ww',

    describe:zs.describe

}

accountingCopy.describe()
```
#### 2. private  public
```ts
 // class: private创建内部变量，只能class内部本身能使用，复制/继承后的class无法访问数据
 // class: public创建公开变量, 外界可以访问且修改
class UserItem {

    userName:string;

    private employees:string[] = []

    constructor(n:string){

        this.userName = n

    }

    describe(this:UserItem){

        console.log(this.userName)

    }

    addEmployees(item:string){

        this.employees.push(item)

    }

    printEmployees(){

        console.log(this.employees)

    }

}

let zs = new UserItem('张三')

console.log(zs)

zs.describe();

zs.addEmployees('李四')

zs.printEmployees()

```
#### 3.初始化
```ts
//可以通过这样书写来避免双重初始化
class UserItem {

   // userName:string;

    private employees:string[] = []

    constructor(public:userName:string){

        //this.userName = n

    }

    describe(this:UserItem){

        console.log(this.userName)

    }

    addEmployees(item:string){

        this.employees.push(item)

    }

    printEmployees(){

        console.log(this.employees)

    }

}
```
#### 4.readOnly
```ts
 // class: readonly只读变量，不可修改
class UserItem {

   // userName:string;

    private employees:string[] = []

    constructor(private readonly id:number,public userName:string){

        //this.userName = n

    }

    describe(this:UserItem){

        console.log(this.userName)

    }

    addEmployees(item:string){

        this.employees.push(item)

    }

    printEmployees(){

        console.log(this.employees)

    }

}
```
#### 5.继承
```ts
 class itClass extends UserItem{

    constructor(id:number,n:string){

        super(id,n)

    }

}

const ww = new itClass(123,'王五')

ww.describe()

console.log(ww)
```
#### 6.protected
```ts
//protected受保护数据，可继承使用，且只能class内部本身能使用
class UserItem {

    userName:string;

    // private employees:string[] = [];

    protected employees:string[] = [];

    constructor(readonly id:number,n:string){

        this.userName = n

    }

}
```
#### 7.getter and setter
```ts
 //get函数必须要返回数据，可以返回私密变量数据
 //set函数，传入数据进行加工
 type TypeScript = string | number;

class TestClass {

    private testprivate:TypeScript ='';

    constructor ( ){

  

    }

    get testGet(){

        if(this.testprivate){

  

            return this.testprivate

        }

        throw new Error('没有数据');

    }

    set testSet(val:TypeScript){

        if(!val){

            throw new Error('请传入正确的数据')

        }

        this.testprivate = val

    }

}

let newclass = new TestClass();

newclass.testSet = '私有数据通过set方法进行访问'

newclass.testGet
```
#### 8. static
```ts
 // static静态变量函数，内部访问，与外部访问方法一样。
 // static构建静态变量/函数，class无需实列化即可访问使用
class UserItem {
    static staticTest:string = '456';
    static printuserName(n:string){
        return {userName:n}
    }
}

let zs = new UserItem(20,'张三')

console.log(UserItem.printuserName('max'), UserItem.staticTest)
```
#### 9.抽象类
```ts
 1.  **关键字abstract**
2.  **抽象类不允许被实例化，抽象类的存在只为了向子类服务**
3.  **抽象类中包含抽象属性/方法，和普通属性/方法**
4.  **被抽象的属性/方法不允许拥有具体的内容**
5.  **子类如果不是抽象类，就必须将所有抽象父类的方法/属性具体化*


abstract class Animal {  //定义一个抽象类
    abstract name: string  //抽象一个name属性，但是name属性不允许有值，也不允许被 constructor 赋值
    abstract eat(): void  //抽象一个方法，方法不允许有内容，只允许标注返回值类型
    run(): void {  //这是一个普通方法

    }
}
class Dog extends Animal {
    //因为Dog不是抽象类所以必须有name和eat();第5条
    /*
    只能这样赋值，不允许用constructor(name: string) {
      this.name = name
    }因为父类没有用是抽象的，没用constructor赋予具体内容
    */
    name: string = '狗'

    gender: string
    constructor(gender: string) {
        super()  //此处super中也不允许有父类的抽象属性
        this.gender = gender
    }
    eat(): void {
        console.log('狗吃饭');
    }
}
const ani: Animal = new Animal() //不允许（第2条）
const dog: Dog = new Dog('公')
console.log(dog.name);  //狗
dog.eat()
```
### 11.interface

// 0.目的：定义好对象结构，然后将其用于变量设定为类型, 增加程序的可读性**

// 1.注意:

    // a) interface只能使用于ts中

    // b) 并且interface变量开头大写

    // c) 类似于public,private等是无法使用的, readonly是可以使用的

// 2.使用:

    // a) let/const: 可以使用到普通变量

    // b) class: 可以通过implements使用interface模板对象

// 3.扩展接口:interface支持extends继承创建

// 4.函数接口

// 5.可选属性:"xxx?: xxx": 可选属性，ts专属
#### 1. 定义interface

```ts


// interface模板构建

interface Exp {

    tel : number

}

// interface可以继承

interface Person extends Exp{

    name: string;

    age:number;

    show:(text: string)=>void;

    outputName?:string;     // "xxx?: xxx": 可选属性，ts专属
}
```
#### 2. 在类中使用interface
```ts
interface TestInterface{

    name:string;

    testFun(str:string):void;

}

class Person implements TestInterface{

    name: string;

    constructor(n:string){

        this.name = n;

    }

    testFun(str: string): void {

        console.log('hello'+str)

    }

}

let a: TestInterface;

a= new Person('hh')

console.log(a)
```
#### 3. interface只读属性
```ts
//在接口中是没有public 和 prevate的 
//此属性只能设置一次, 并且此后为只读,以便在初始化对象后不能更改｡
interface TestInterface{

   readonly name:string;

    testFun(str:string):void;

}
```
#### 4.interface的继承
```ts

   interface GetName{

    name:string;

}

interface GetPlay extends GetName{

    play(n:string):void;

}

class TestClass implements GetPlay{

    name:string;

    constructor(n:string){

        this.name =  n

    }

    play(n:string){

        console.log(this.name +'正在'+n)

    }

}

 let b = new TestClass('王五')

 b.play('吃饭')
//如果要继承的接口不止一个可以用逗号分隔
interface GetPlay extends GetName,GetSex{
    play(n:string):void;
}
```
#### 5.作为函数类型的接口
```ts
// type addFn = (number1:number,number2:number)=>number;

interface addFn {

    (number1: number, number2: number): number;

}

let addFun: addFn;

addFun = (n1:number,n2:number){

    return n1+n2

}
```
#### 6.可选参数和属性
```ts
// 可以给参数或者方法添加？使得这个变量或者函数变为可选参数
interface TestInterface{

    name?:string;
	constructor(n?:string){
		if(n){
			this.name = n
		}
	}
    testFun(str:string):void;

}
```

### 12.Ts高级用法
##### 1. type: “&"合并符号
```ts
/* type: “&"合并符号 */

// 情况一: type为对象时，相当于二者对象要求合并

// 情况二: type为单个变量时, 相当于二者，交集

type TestA = {

    name:string;

    age:number;

}
type TestB = {

    name:string;

    sex:string;

    time:Date;

}

type TestC = TestA & TestB

  

let a:TestC;

a ={

    name:'张三',

    age:20,

    sex:"男",

    time:new Date()

}

  

type TestD = string | number;

type TestE = boolean | string;

  

type TestDE = TestD & TestE;

  

let testInputDE :TestDE = 'srtring'
```
#### 2."|" 符号的使用
```ts
// 模型: type xxx = yyy | ccc; 
// 使用: 在函数中，可以通过判断其类型进行对应类型赋值。如果没有判断类型则将无法正常使用
type orTest = Bired | Cat

function speedFn(n: orTest) {
    if ('runSpeed' in n) {
        console.log(n.runSpeed)
    }
    let speed: number;
    switch (n.type) {                       // 函数中，必须要有类型判断，否则将无法正常使用
        case "bired":
            speed = n.flySpeed;
            break;
        case "cat":
            speed = n.runSpeed;
            break;
    }
    console.log(`${n.type} - SPEED: ${speed}`);
};
speedFn({ type: 'cat', runSpeed: 666 });
```

#### 3.在ts中document正确的使用方法，防止报错
```ts
 // a) 目的: 声明doucument抓取标签的类型，防止ts报错
    // 0. 方法一: <HTMLInputElement>
    // 1. 方法二: as HTMLInputElement, "as"告诉ts此乃document抓取的标签类型
  // b) "as" 在ts中是类型转换功能

// 方法一:
const buttonA = <HTMLInputElement>document.querySelector("#testInput")!;
buttonA.value = 'xxx';

// 方法二: "as"告诉ts此乃document抓取的标签类型, 否则将报错
const buttonB = document.querySelector("#testInput")! as HTMLInputElement;
buttonB.value = 'yyy';
```
#### 4. interface不确定属性名称构建 

```ts
interface ErrorContainer {
    // 设置键值为字符串类型  设置值为字符串类型
    [prop:string]:string

}
let errorType:ErrorContainer ={
    email:'not a valid email',
    userName:'必须以大写开头'
}
```
#### 5.重载函数
```ts
/* 函数重载：告诉ts什么样的赋值给什么样的类型结果 */

// a) 目的: 告诉ts函数什么样的赋值给什么样的类型结果，防止加工函数然后值时报错

function testLoadFunction(a: string, b: string): string; // 函数重载
function testLoadFunction(a: number, b: number): number; // 函数重载
function testLoadFunction(a: number, b: string): string;//函数重载
function testLoadFunction(a: string, b: number): string;//函数重载

function testLoadFunction(a: number | string, b: number | string) {// 原始函数
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = testLoadFunction('ztaetr', 'xxx');
console.log(result.split(''))       // 报错: 如果没有"函数重载"，那么将报错
```
#### 6."?"可选符号
```ts
* "?"可选符号 */
// a) 函数中: 告诉ts为可选参数
// b) 索引变量中: 告诉ts我也不知是否能索引成功
// c) 目的: 告诉ts不要因为不确定变量来报错
const axiosUserDate = {
    id: 'xxx',
    name: 'zt',
    // job: { title: 'ceo', des: 'testxxx' }
}
console.log( axiosUserDate?.job?.title);
//"?": 保证索引数据不存在js也能正常运行，并返回undefind，但ts会提示错误
```

#### 7."??"双重可选符
```ts
// "??"双重可选符，“||”也可以做到其功能，只是“特殊点”不适合

// a) 目的: 给变量备用数据

// b) xx ?? bb: 如果xx值不为 undefined 或者 null，则返回真实数据，否则返回bb准备好的数据;

const testInputDate = '';

const getDate = testInputDate ?? '备用数据';// 备用数据

console.log(getDate);
```

### 13.泛型
#### 1.Generic | 通用类型 | 泛型类型 

a) 目的: 最大的用处是，使函数可以自由的传入/加工"数据"，ts不在报错，以及更加方便的约束数据类型

b) 内置通用类型函数:

c) 自定义通用类型函数:

#### 2.通用类型函数function
```ts
function merge<T,U> (ob1:T,ob2:U){
    return {...ob1,...ob2}
}
let testMerge = merge({name:'SoQ'},{age:24});

testMerge.age
```
#### 3.类型约束
```ts
//泛型类型约束

  // a) 通用类型约束：多种类型数据约束<T extends xxx | yyy | ccc >

function mergeObj<T extends object, U extends object>(ob1: T, ob2: U) {
    return { ...ob1, ...ob2 }
}

interface LengthExtends {
    length: number
}
function testExtendsFunction<T extends LengthExtends>(inputString: T) {// 通用类型继承属性
    let resultDes: string = '';
    if (inputString.length === 1) { // 如果没有继承属性length，将报错
        resultDes = '长度为1';
    }
    else if (inputString.length > 1) {
       resultDes = `长度为${inputString.length}`;
    }
    return [inputString, resultDes];
}
console.log(
    testExtendsFunction('this there')
);
/*
keyof约束
*/

function testKeyOf<T extends object,U extends keyof T>(obj:T,key:U){
    return obj[key]
}
console.log(
    testKeyOf({name:"SOQ"},'name')  
);
```
#### 4.泛型类
```ts
// 泛型类

class DataStorage<T extends string | number>{
    private data:T[]=[];
    addItem(item:T){
        this.data.push(item)
    }
    removeItem(item:T){  this.data.splice(this.data.indexOf(item),1)
    }
    printData(){
        console.log(this.data);    
    }
}
let textStorage = new DataStorage()
textStorage.addItem('max')
textStorage.addItem('manu')
textStorage.removeItem('max')
textStorage.printData()
textStorage.addItem(1)
```
#### 5.关键字
```ts
// 关键字 partial
   // a) 原理: 参数类型变为可选
   // b) 报错: 要求输出结果xxx时：Partial< xxx >要配合as，将结果值as转换为xxx类型进行输出，否则也将报错
   // c) 无要求输出结果，则无需as转换
interface Doc {
    title:string,
    size:number,
    date:Date
}
/*
 相当于: interface Doc { id?: number; age?: number; name?: string; }
*/ 
function Mydoc(title:string,size:number,date:Date):Partial<Doc>{
    let mydoc: Partial<Doc> = {};
    mydoc.title = title;
    mydoc.size = size;
    mydoc.date = date;
    return mydoc as Doc
}

// 关键字 Readonly
// 只能读取无法进行操作
let arr:Readonly <string[]> = ['max','manu'];

// arr.push('ail')
```

#### 6."通用类型" 与 "联合类型" 区别 

```ts

    a) 通用类型：在class中或者函数中，一开始就抉择数据类型
         0. extends - 约束通用类型的目的:  约束允许您缩小可能在通用函数等中使用的具体类型。
    b) 联合类型: 在class中或者函数中，一开始不能统一抉择数据类型
    c) 通用类型更加灵活，如上方的 const testNewControlArray_string = new TestControlArray<string>(), 如果只使用联合类型是很难实现这一步的。
    d) 何时使用通用类型: 如果您拥有一个实际上可以与其他多种可能的类型一起使用的类型（例如，发出不同类型数据的对象）- 官方语。
```

### 14.Decorators | 装饰器 | Meta-Programming
#### tips：ts中的new（）

new()描述了typescript中的构造函数签名。这意味着它描述了构造函数的形状。  
例如，取{new(): T; }。你是对的它是一种类型。它是类的类型，其构造函数不带参数。请考虑以下示例


```js
function create< T >(c: { new(): T; } ): T {  
    return new c();  
}

/*
这意味着函数create接受一个参数，其构造函数不带参数并返回类型为T的实例。
*/


function create< T >(c: { new(a: number): T; } ): T

/*
这意味着create函数接受一个参数，其构造函数接受一个数字a并返回一个类型为T的实例。  
解释它的另一种方法可以是，以下类的类型
*/


class Test {  
    constructor(a: number){  
   }  
}
/*
将是{new(a: number): Test}
*/
```

#### 1.装饰器创建

```ts
/*
a）当类被定义时就会 装饰器就会执行
b)  实例化时不会执行
c)通过@符来给类或者构造函数绑定装饰器
*/
function myFirst (constructor:Function){
    console.log(constructor)
}
@myFirst
class SayHi{

    constructor(){
        console.log("hi");
    }
}
```
#### 2. 装饰器工厂

```ts
/*
a) constructor: Function: 此参数代表，抓取当前文件中的class代码
b) 注意: constructor参数名称可随意修改
*/
function Logger(locstion: string) {
    return function (constructor: Function) {
        console.log(locstion);
        console.log(constructor);

    }
}
@Logger('hello')
class Person {
    constructor() {

    }
}
```

#### 3.各个装饰器入参
```ts
// 属性装饰器
/*
a) 注册类时进行执行
b) 一般有两个参数
*/ 
/**
 *
 *
 * @param {*} tag    类的原型
 * @param {(string | symbol)} propertyName   属性名
 */
function log(tag:any,propertyName:string | symbol){
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
decorator：
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
```