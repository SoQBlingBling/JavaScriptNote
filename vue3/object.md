### 1. 引入vue3
我们可以通过cdn的方式进行引入也可以使用 cli工具进行构建
 ```js
	<><>
	let countor = {
		data：function（）{
			return{
			name:'zhangsan'
			}
		}
	}
	Vue.createApp(countor).mount('#app')
 ```

### 2.vue的
最基本的数据绑定形式是文本插值，它使用的是“Mustache”语法 (即双大括号)：


```
<span>Message: {{ msg }}</span>
```

### 3.动态参数
同样在指令参数上也可以使用一个 JavaScript 表达式，需要包含在一对方括号内：

```
<!--
注意，参数表达式有一些约束，
参见下面“动态参数值的限制”与“动态参数语法的限制”章节的解释
-->
<a v-bind:[attributeName]="url"> ... </a>

<!-- 简写 -->
<a :[attributeName]="url"> ... </a>
```
这里的 `attributeName` 会作为一个 JavaScript 表达式被动态执行，计算得到的值会被用作最终的参数。举例来说，如果你的组件实例有一个数据属性 `attributeName`，其值为 `"href"`，那么这个绑定就等价于 `v-bind:href`。

### 4.计算属性中的getter 和setter

每一个计算属性都有一个getter 和一个setter
计算属性是一个只读的属性 不可更改
```js
        computed: {

          reverMsg: {

            // return this.msg.split('').reverse().join('')

            set(newValue) {

              console.log(newValue);

            },

            get() {

              console.log("get方法执行了一次");

              return this.msg.split("").reverse().join("");

            },

          },

        },

```

### 5.watch
- 监听数据发生变化 一个数据改变多个数据,执行异步操作，或者复杂的逻辑代码

```js
        watch:{

             msg (newValue,oldValue){

            console.log(newValue,oldValue);

            }

          }
```

- 对象的另一种写法   和深度监听
```js

	        watch: {

          user: {

            //初始化后调用函数

            immediate: true,

            handler(newValue, oldValue) {

                console.log(newValue);

            },

            //深度监听  会将对象便利然后添加监听器 比较消耗性能

            deep:true

          },

          'user.age'(newValue, oldValue){//使用字符串的形式会单独监听对象中单个属性的值

            console.log(newValue, oldValue);

          }

        },


```

### 6.class与style
class可以使用对象和数组


```html
<!--第一：放置对象-->
<!--其中 active是类名   flag是布尔类型值 -->
<!-- 可以和普通的类同时存在-->
<div :class='{active：flag}'></div>


<!-- 可以传入多个对象来控制样式-->
<div :class='{active：flag}'></div>
<div :class='{active：flag,active1:flag1}'></div>



<!-- 可以直接在data中控制-->
data(){
	return {
		classname:{
			active:true
		}
	}
}
<div :class='classname'></div>


```


```html
<div :class='[active,object]'></div>

```

### 7. v-model
```html

<!-- 如果为单个的多选框data可以为true或者false-->
	<input v-model = 'data'  type='checkbox' >
<!-- 如果为多个多选框 那么选中的时候就会向v-model中绑定的数组中添加input中的value值-->
	<input v-model = 'fruits' value='苹果' type='checkbox' >
	<input v-model = 'fruits' value='梨' type='checkbox' >
	<input v-model = 'fruits' value='香蕉' type='checkbox' >
	
<!--单选框选中的时候就会向v-model中绑定的字符串替换input中的value的值-->
<!--注意：在v-model中如果绑定的是同一个变量那么则不需要name属性来进行绑定两个单选框-->
	<input v-model = 'sex' value='男' type='radio' >
	<input v-model = 'sex' value='女' type='radio' >
	
<!--如果为下拉框与checkbox的选中方法是一样的  但是当下拉框想选中多个的时候那么下拉框的v-model就需要绑定一个数组-->
<select v-model='citys' multiple>
	<options value='北京'></options>
	<options value='上海'></options>
	<options value='南京'></options>
	<options value='天津'></options>
	
</select>

```

v-model 的修饰符
```html
	<!-- 当输入框失去焦点时才会将数据渲染到data上 -->
	<input v-model.lazy = 'data' >

	<!-- 将输入框中的值自动转换为数字类型 -->
	<input v-model.number = 'data' >
	
	<!-- 将两端的空格去掉 -->
	<input v-model.trim = 'data' >
	
	
```

### 8.组件之间的传值
父组件访问子组件中的变量和函数
```js
//父组件
	<template>
		<hello ref='p'/>
	</template>
	data(){
		return{
			msg:'你好'
		}
	},
	methods:{
		getSon：function（）{
		//this.$refs.标签中ref属性的值.组件内部的属性或者时方法
		this.$refs.p.getname
		}
	}
	
```


子组件访问父组件中的变量和函数

```js
//子组件   
// 在子组件中可以直接使用this.$parent 获取到父组件
 this.$parent
 //  在开发中我们尽量少用这个方法去获父组件中的值 这样如果这个组件在别的地方调用那么有时候会找不到这个数据会降低组件的复用性建议还是使用prop获取
```


组件访问根组件中的变量和函数
```js
//子组件   
// 在子组件中可以直接使用this.$root 获取到根组件
 this.$root

```

### 9.插槽
```html

	<!--父组件-->
	<hello>
		这句话是展示在子组件中的内容
	</hello>
	<!--子组件-->
	<template>
	<slot></slot>
	</template>
```

- 具名插槽
```html
		<!--父组件-->
	<hello>
	<!--v-solt只能作用在template上 -->
		<template v-slot:button>
			<button></button>
		</template>
	</hello>
	<!--子组件-->
	<template>
	<slot name='button'></slot>
	</template>
```

- 作用域插槽
```html

		<!--父组件-->
	<hello>
	<!--v-solt只能作用在template上 -->
		<template v-slot:default=button>
			{{button.list}}
		</template>
		<template v-slot:input=button>
			{{button.list}}
		</template>
	</hello>
	<!--子组件-->
	<template>
	<slot :list='list'></slot>
	<slot name='input' :list='list'></slot>
	
	</template>
```

### 10.provide 和 inject
跨组件之间的通讯   proviede和inject并不是响应式的
```js
	/*上层组件*/
	//参数是固定的
	provide:{
		message:'hellow'
	}
	//如果参数是不固定的
	provide(){
		return{
			message: this.message
		}
	}
	/*下层组件*/
	inject：['message']
```

实现provide和inject的数据响应式
```js
	// 响应式对象

	/*上层组件*/
	provide:{
		obj：{
			message:'hello'
		}
	} 
	 
	/*下层组件*/
	inject：['obj']


	// 函数的形式

	provide(){
		return{
			message:()=>this.message
		}
	}



```

###  11.组合式api setup
```js
	setup(){
    // setup是围绕beforeCreate和created生命周期钩子运行的，在这些钩子中编写的任何代码都应该直接在setup函数中编写
        
	//组件被创建之前执行不需要使用this，this不会指向实例
	let msg = 'hello';
	function changeMsg(){
		msg = '你好'
	}
	return { msg }
	}
```

 - 数据获得响应式
```js
//为何不直接将我们的setup中的函数设置为响应式数据？    为了不太数据类型的行为统一 例如string和number等基本类型是值传递而不是引用传递 而在我们的ref中我们会经常通过引用的概念


//基本数据类型的响应式数据
import { ref } from 'vue';
setu(){
    let num  = ref(0) //返回带有value属性的对象  修改时需要属性名.value来进行修改   当使用插表达式时就可以直接使用属性名
    return { num }
}

impoort { rective } from 'vue'
//通过reactive定义引用型的数据
setu(){
	let obj = rective（{
		name:'张三'
		age：18
	}）
}


//使用toRefs使解构后的数据重新获得响应式
impoort { toRefs } from 'vue'

	setup(){
	let msg = {
		name:'张三'
		age：'18'
	};
	function changeMsg(){
		msg = '你好'
	}
	return { msg ,...toRefs(msg) }
	}
```

###  12.组合式api setup watch的使用
```js
import { ref，,reject , watch,watchEffect } from 'vue'

setup(){
	let count = ref(0);
	let user = reject({
		name='zhangsan', 
		age = 18
	})
	//第一个是我们要侦听的响应式数据 第二个是回调函数
	watch(count,(newval,oldval)=>{
		console.log(newval,oldval)
	})
	//深度监听 通过watchEffect（回调函数）他不需要指定监听的属性，他会自动的收集依赖 组件初始化的时候会执行一次自动收集依赖
	watchEffect((newval,oldval)={
		
	})
/*
watch和watchEffect的区别
1. watchEffect 是不需要指定监听的属性的 自动收集依赖只要在回调中引用到了响应式的属性 只要这些属性发生改变回调就会执行，
watch只能侦听指定的属性，做出回调函数的执行，可以侦听多个
2.watch可以侦听旧值和新值，watchEffect拿不到
3.watchEffect在组件初始化的时候就会自动执行一次，用来收集依赖，watch不需要，一开始就指定了
 */
	}
	return { count , user}
}
```

###  13.组合式api setup computed的使用
```js
	import {ref，reject，computed} from 'vue'
	let str = ref('hello')
	let reversStr = computed(()=>{
		
		return str.value.spilt('').revers().join('')
	})

```

### 14.组合式api 生命周期
```js
	//在setup 函数中 生命周期钩子函数是可以执行多次的
	import {onBeforeMount , onMounted} from 'vue'
	setup(){
		onMounted(()=>{
			console.log('执行第一次')
		);
		onMounted(()=>{
			console.log('执行第二次')
		)	
	
	}
```

### 15.组合式api props
```js
	//由于props 接受数据比较早（在beforeCreat 之前创建）, 我们在setup中无法使用this
	//注意props 是响应式的不能通过es6的解构赋值进行操作
	props：{
		message:{
		type:String,
		default:'你好'
		}
	},
	setup(props){}
	
	
```

### 16.组合式api context
```js
	//我们可以在setup函数中接受第一参数 但是他的值并不是响应式的
	setup(props,context){
	console.log(context)// attrs 组件标签上的属性   slot 插槽  emit 触发事件 
	context.emit('giveParmes',sondata)
	context.expose({}) //将数据暴露出去
	return ()=> h('div',233)  //渲染函数
	}
```

### 17.组合式api provide/inject
```js
	 import { provide } form 'vue'
	 setup(){
		 provide('name','张三')
	 }

	import  { inject } from 'vue'
	setup(){
		let name = inject('name')
	}
```

### 18.组合式api sfc
```vue
	<script setup>
		//顶层的绑定会被暴露给模板
		//定义响应式的变量，还是需要从vue中引入
		import {ref} from 'vue'
		//引入组件不需要注册组件
		//定义变量 在模板使用不需要暴露出去，模板直接使用
	</script>
```