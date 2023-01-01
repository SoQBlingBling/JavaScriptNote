### 1.插槽

- 基本使用：
  - 在父组件中使用子组件标签，标签内部书写父组件中的内容；在子组件内使用slot标签

```vue
<div id='app'>
    <mychild>子组件的内容</mychild>
</div>

<script>
    
var  mychild = {
    template:'<div> <slot></slot></div>',
    data:function(){
        return {}
    }
} 
    
var app = new Vue({
 	el:'#app',
	data:{

	},
    components:{
        mychild
    }
	
})
</script>

注意：
如果组件的标签内部没有内容  那么可以在solt标签中书写内容当作default（默认） 内容 ,如果书写了内容那么会将slot中的内容替换
```



- 具名插槽
  - 在子组件的slot标签给与name 属性;在父组件中子组件标签的内部通过template标签包裹要展示对应内容  并给template标签添加v-slot指令

```
<div id='app'>
    <mychild>
    	<template v-slot:age></template>
    </mychild>
</div>

<script>
    
var  mychild = {
    template:'<div> <slot name='age'></slot></div>',
    data:function(){
        return {}
    }
} 
    
var app = new Vue({
 	el:'#app',
	data:{

	},
    components:{
        mychild
    }
	
})
</script>


v-slot 简写可以使用#代替，但是一旦插槽有了
```



- 作用域插槽
  - 在slot标签上使用属性绑定绑定要传递的值；在template标签上使用v-slot:default = 参数 绑定     在父组件调用子组件上面的值时{{参数.bind绑定的属性}}

```
<div id='app'>
    <mychild>
    	<template v-slot:default = stopProps>
    	{{stopProps.age}}
    	</template>
    </mychild>
</div>

<script>
    
var  mychild = {
    template:'<div> <slot v-bind:age=age></slot></div>',
    data:function(){
        return {
        age:20
        }
    }
} 
    
var app = new Vue({
 	el:'#app',
	data:{

	},
    components:{
        mychild
    }
	
})
</script>
```

### 2.mixin

让组件有公共的data 和生命周期

```vue
<template>
<div></div>
</template>
<script>
    import mixinData from 'xxxx.js'
    export default {
        mixins:[mixinData]
        data(){
            return {
                
            }
        },
        
    }
</script>
可以将公共的data和生命周期
如果变量和方法在组件和mixin的数据名冲突那么会优先调用组件的名字
```

### 3.provide 和 inject

提供跨组件通讯

平常不推荐使用

```vue
 <div id="app">

        <mychild></mychild>
       
    </div>
   var mychild = {
            template:`<div>{{prodata}}子组件<button @click= changetext></button></div>`,
            inject:['prodata'],
            methods:{
                changetext(){
                    this.prodata = '不好'
                }
            }
        }
        new Vue({
            el:'#app',
            provide(){
                return{
                    prodata:'你好'
                }    
            },
            data:{

            },
            components:{
                mychild
            }
        })
```

### 4.$attrs 和 $listeners

```vue
 <div id="app">
        <mychild :date='date' @addInfo="changemsg" v-on='$listeners'></mychild>
 </div>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script >
        var mychild = {
            template:`<div>
            
             子组件
            </div>`,
            inheritAttrs:'false',
            mounted() {
                console.log(this.$attrs);// 2020.05.28
                // console.log(this.$listeners.addinfo);
                this.$listeners.addinfo() //将会执行
            },
        }
        new Vue({
            el:'#app',
            data:{
                date:'2020.05.28'
            },
            components:{
                mychild
            },
            methods:{
                changemsg(){
                    console.log('change this');
                }
            }
        })
    </script>

inheritAttrs

为true（默认）
没有被 props绑定的属性placeholder和test-attrs显示到了子组件根节点上了。

为false
没有被 props绑定的属性就没有作为普通的 HTML 特性应用在子组件的根元素上。

注意：这个选项不影响 class 和 style 绑定。
```

### 5.路由相关

#### 1.alias

```js
var router = new vueRouter({
	routes:[
	{
		path:'/',
		name:'pagea',
		alias:'/home',//相当于第二个path
		component:xxx
    }
]
})
```

#### 2.*

```vue
var router = new vueRouter({
	routes:[
	{
		path:'*',
	
		component:xxx
	}
]
})
当地址为用户乱输入的地址时进入这个页面
```

#### 3.路由传值

使用 params 和query 进行传递



- params

```vue
<router-link to='/B/zs/19'></router-link>

<div @click ='go'>
   跳转
</div>

go(){
this.route.push({
	name:'B'
	params:{
		name:'zs',
		age:'19'
}
})
}

var router = new Router({
  routes: [
     {
      path: '/',
      name: 'A',
      component: require('../components/A')
    },
    {
      path: '/B/:name/:age',
      name: 'B',
      component: require('../components/B')
    }
  ]
})

接收页面
this.route.params

```

- query

```vue
<router-link to='{ path: '/B',query:{name:'张飞',age:22}}'></router-link>

<div @click ='go'>
   跳转
</div>

go(){
this.route.push({
	path:'/B'
	query:{
		name:'zs',
		age:'19'
}
})
}

var router = new Router({
  routes: [
     {
      path: '/',
      name: 'A',
      component: require('../components/A')
    },
    {
      path: '/B/:name/:age',
      name: 'B',
      component: require('../components/B')
    }
  ]
})

接收页面
this.route.query
```

#### 4.命名视图

 

```js
<router-view name='right'></router-view>
<router-view name='left'></router-view>

var router = new Router({
  routes: [
     {
      path: '/',
      name: 'A',
      component: require('../components/A')
    },
    {
      path: '/B',
      name: 'B',
      components: {
          default:'默认值'
          left:require('../components/b1')
          right:require('../components/b2')
      }
    }
  ]
})
```

#### 5.子路由

```js
<router-link to='/A/b'></router-link>
var router = new Router({
  routes: [
     {
      path: '/',
      name: 'A',
      component: require('../components/A')
      children:[
         {
         path:'b',
         component:require('../components/b')
     }
         ]
    },
    
  ]
})
```

#### 6.路由独享守卫

```js
var router = new Router({
  routes: [
     {
      path: '/',
      name: 'A',
      component: require('../components/A')
      beforeEnter:function(to,from,next){
      		
      		console.log(to) //要去哪里
    
    		next()//进入下一个页面 next('/home')
      
      }
     }
    
  ]
})
```

#### 7.路由全局守卫

```js
var router = new Router({
  routes: [
     {
      path: '/',
      name: 'A',
      component: require('../components/A')
     },
           {
      path: '/B',
      name: 'B',
      component: require('../components/B')
     }
    
  ]
})
router.beforEach(function(){
    
})
控制所有的页面
```

#### 8.元数据

```js
var router = new Router({
  routes: [
     {
      path: '/',
      name: 'A',
      component: require('../components/A')
      mate:{}
     },
           {
      path: '/B',
      name: 'B',
      component: require('../components/B')
     }
    
  ]
})

```

###  6.vuex

- 安装 vuex      

npm install vuex --save

- 导入vuex

import vuex from  ‘vuex’

- 创建store对象

```js
const store =new Vuex.Store({
    state:{},
    getter:
    mutations:
    actions:
})
```

- 挂载

```js
new vue({
    el:'#app',
    store
})
```

#### 1.static

相当与我们的data用来存放数据

state是提供唯一的公共数据源，所有共享的数据都要同意放到store的state中进行存储`

```js
//访问state中的数据的第一种方式
this.$store.state.数据名

//访问state的数据的第二种方式
	//1.从vuex中按需导入mapState函数
import {mapState} from 'vuex'
	//通过刚才导入的mapState函数，将当前组件需要的全局数据，映射为当前组件的computed计算属性:
computed:{
    ...mapState(['数据名'])
}
```

#### 2.mutation

mutation用于变更Store中的数据

```js
const store= new Vuex.store({
    state:{
        num
    },
    mutations:{
        add:function(state){
            state.num++
        }
    }
})

//触发store中的 mutation方法 方法一
this.$store.commit('add',要传递的参数)

//方法二
	//1.从vuex中按需导入mapMutations函数
import { mapMutations } from 'vuex'
	//2.通过刚才导入的mapmutations函数，将需要的mutations函数，映射为当前组件的metods方法：
methods:{
    ...mapMutations(['add'])
    //使用时直接在methods 中声明一个其他方法在方法中调用这个函数就可以了
    addnum(){
        this.add()
    }
}
```

#### 3.action

如果通过异步修改数据必须使用action 而不能使用mutation 但是在action中函数还是要触发mutation的方式简介变更数据

```js
const store= new Vuex.store({
    state:{
        num
    },
    mutations:{
        add:function(state，调用add传递的参数){
            state.num += 调用add传递的参数
        }
    },
    actions:{
        addasync(content){
            content.commit('add',调用actions函数传递的参数)
        }
    }
})
// 触发 action 中的函数
this.$store.dispatch('addasync',携带的函数)


//触发 action中的函数的第二种方式
	//1.从vuex中按需导入mapActions 函数
import { mapActions } from 'vuex'
	//2.通过刚才导入的mapActions函数 将需要的actions函数 映射为当前组件的methods方法:
...mapActions(['addasync'])
```

#### 4.getter

Get 用于对store 中的数据进行加工处理形成新的数据

- store中数据发生变化 getter 的数据也会跟着发生变化

```js
const store = new Vuex.Store({
    state:{
        num
    },
    getters:{
        shownum:state =>{
            return '当前最新的数量是'+state.num
        }
    }
})

//使用getter 中数据的第一种方法
this.$store.getters.名称

//使用getters的第二种方法
import {mapGetters} from 'vuex'
computed:{
    ...mapGetters(['shownum'])
}
```

#### 5.modules

```js
//modules的js文件
exprot default{
	namespaced:true, //命名空间
    state,
    getters,
    mutations,
    actions,    
}
// vuex js
    import user from 'xxxx.js'
const store = new Vuex.Store({
    state:{
        num
    },
   modules:{
       user
   }
})
```

```js
//调用 modules 中的 user的 state 数据
this.$store.state.users.数据

//调用 modules 中的 user 的mutations中的方法
import { mapMutations } from 'vuex'
methods:{
    ...mapMutations({
        //user 下面的 方法
        ‘方法名’:'user/方法名'
    })
}
```



#### 6.拆分写法

- 1.创建一个js文件
- 2.

```js
export default{
    num:0
}

```

- 3.

```js
在vuex 页面
import state from 'xxxx/state.js'
const store= new Vuex.store({
    state
})
```

#### 7.MUTATIONS_TYPE

将mutations中所有的方法归纳起来

目录：`mutations_type.js`

```
export const MUTATIONS_TYPE = {
	ADDNUM:'addnum'
}
exprot default{
[MUTATIONS_TYPE.ADDNUM](state){
	state.num++
}
}
```

组件中使用：

```js
方法一:
import {mapMutations} from ‘vuex’
methods：{
    ...mapMutations([MUTATIONS_TYPE.ADDNUM])
}
方法二：
this.$store.commit([MUTATIONS_TYPE.ADDNUM])
```



















