### 1.简介

- canvas是一个轻量级的画布，我们使用canvas进行javascript的变成，不需要增加额外的插件，创建的是位图，不可以支持事件

### 2.canvas 的基本使用
```js
 	//!需要先填充颜色然后才能执行绘制 不然颜色是不会生效的。
    //1.获取canvas元素

	var canvas = document.getElementById('canvas')
	
	//2.得到画布的上下文，上下文有两个2d上下文和3d上下文
	// 所有的图像绘制都是由ctx属性和方法设置的与canvas标签没有关系
	
	var ctx =canvas.getContext("2d")
	
	//4.设置颜色
	ctx.fillStyle = 'green'
	
	//3.绘制矩形

	//ctx.fillRect('x轴,y轴,宽,高')
	ctx.fillRect(100,100,200,50)

	

```

###  3.清除画布
- canvas一旦绘制不能再去修改，如果想要canvas 的图形改变 只能根据:清屏 -更新-渲染的逻辑执行
```js
	//clearRect(开始的x轴，开始的y轴，到x轴范围，到y轴的范围)
	ctx.clearRect(0,0,100,100)
```

```js
	var left = 100;
	var canvas = document.getElementById("canvas");
	var ctx = cavas.getContext('2d');
	ctx.fillStyle='blue';
	ctx.fillRect(100,100,200,200)
	setInterval(function(){
		ctx.clearRect(0,0,500,500)
		left++;
		ctx.fillRect(left,100,200,200)
	},10)
```

### 4. canvas绘制矩形
```js
		//4.设置颜色
	ctx.fillStyle = 'green'
	
	//3.绘制矩形

	//ctx.fillRect('x轴,y轴,宽,高')
	ctx.fillRect(100,100,200,50)

```

### 5.canvas 填充矩形
```js
	ctx.strokeStyle='red'
	ctx.strokeRect(100,100,200,200)
```

### 6.绘制路径

- 绘制路经是为了绘制不规则的多边形
- 路径都是闭合的 使用路经进行绘制的时候需要既定步骤
	- 需要设置起点
	- 使用绘制命令画出路径
	- 封闭路径
	- 填充或者绘制已经封闭路径的形状

```js
	//创建一个路径
	ctx.beginPath();
	//移动绘制点
	ctx.moveTo(100,100);
	//描述进行路径
	ctx.lineTO(200,100);
	ctx.lineTo(200,200);
	ctx.lineTo(100.200);
	// 闭合路径
	ctx.closePath();
	// 绘制这个不规则的图形
	ctx.strokeStyle='red';
	//绘制
	ctx.stroke()


	// stroke（）通过线条来绘制图形轮廓
	
	// fill() 通过填充路径的内容区域生成实心的图形

	//注 ： 我们在绘制路径的时候可以不闭合路径 （closePath）这个时候会实现自封闭现象（只针对fill）


```

### 6.绘制圆弧
```js
var canvas = document.getElementById('#canvas');

var ctx = canvast.getContext('2d');

	ctx.beginPath();

	ctx.arc(x,y,圆心半径,开始的位置，结束位置，绘制方向【true是逆时针，false是顺时针】)
	ctx.stroke();
```

### 7.透明度
```js
	ctx.globalAplha = 1; 
	
```

### 8.线型
```js
	//线的粗细 属性值默认是数字 没有单位
	ctx.lineWidth =20;


	//改变线 两端的样式  
	ctx.lineCap = 'butt'//(方形)
	ctx.lineCap = 'round'//(圆形)
	ctx.lineCap = 'square'//(增加了一个宽度相同高度是厚度一半的线段)

	//改变线段链接出的样式
	ctx.lineJion = 'round'// 添加扇形区域
	ctx.lineJion = 'bevel'// 添加三角区域
	ctx.lineJion = 'miter'// 添加菱形区域

	//点线
	ctx.setLineDash（数组）//不传则为实线 传入后以线空规律排列

	// 虚线偏移量
	ctx.lineDashOffSet = number;//线与空隙偏移的数值

```

### 9.文本
```js
	ctx.font = '30px 微软雅黑'；
	ctx.fillText('展示的文字'，绘制的x，绘制的y)
	//填充字体
	ctx.strokeText('展示的文字'，绘制的x，绘制的y)
	//文字水平对齐方式   根据绘制x的坐标进行排列
	ctx.textAlign = 'string'//left center right

```

### 10.渐变
#### 1.线性渐变
```js
	//x1:渐变起始x位置 y1:渐变起始y位置 x2:渐变结束y位置y2:渐变结束y位置	
    let lineGradient = ctx.createLineGradient(x1,y1,x2,y2)
	//position:颜色所在位置 0~1  color 颜色
	ctx.addColorStop(position,color)
	//将填充颜色改为渐变
	ctx.fillStyle = lineGradient

```

#### 2.径向渐变
```js
	//表示两个圆，一个以 ( `x1`, `y1`) 为中心，半径为`r1`，另一个以 ( `x2`, `y2`) 为中心，半径为`r2`。
	let radialGradient = ctx. creatRadialGradient(x1,y1,r1,x2,y2,r2);
	//position:颜色所在位置 0~1  color 颜色
	radialGradient.addColorStop(position,color)
	//将填充颜色改为渐变
	ctx.fillStyle =radialGradient()
	
```

#### 3.锥形渐变
```js
	// angle 角度  x，y 起始位置
	let conicGradient = ctx.createConicGradient(angle,x,y)
	//position:颜色所在位置 0~1  color 颜色
	conicGradient.addColorStop(position,color)
	//将填充颜色改为渐变
	ctx.fillStyle = conicGradient
```


### 11.阴影
```js
	// colro ： 颜色
	ctx.shadowColor = color;
	// number : 模糊度
	ctx.shadowBlur = number;
	// number: x轴偏移量
	ctx.shadowOffsetX = number;
	// number: y轴偏移量
	ctx.shadowOffsetX = number
```

### 12.使用图片
```js
	//需要先生成一个图片 或者页面自带的图片
	let img = new Image();
	img.src = 'xxx';
	//需要图片加载完成之后才可以进行图片的渲染
	img.onload= function（）{
		// 第一个参数是要载入的图片
		ctx.drawImage（img,x,y,width,height）
		
		/*
		切片
		x1：开始裁切的x轴位置
		y1：开始裁切的y轴位置
		width：裁切的宽度
		height：裁切的高度
		x2:裁切之后移动切片的x轴位置
		y2:裁切之后移动切片的y轴位置
		width2:切片的宽度
		height2:切片的高度
		
		*/    
		//ctx.drawImage（img,x1,y1,width1,height1,x2,y2,width1,height2）
		
	}
```

### 13.保存和恢复

```js
	//保存画布状态
	save();
	//恢复canvas 的状态
	restore()
	
	/*
	strokeStyle, fillStyle, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit, lineDashOffset, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, globalCompositeOperation, font, textAlign, textBaseline, direction, imageSmoothingEnabled.
	*/
```

### 14.变形

注意在使用变形之前先进行备份  如果不备份的情况下继续进行绘制则再绘制的图形将会受到变形的影响
```js
	//移动
	ctx.translate(x,y)



	//旋转 
	/*
	如果想让其在原处旋转可以在进行位移
		位移移动到中心
			x = x + 0.5 * width
			y = y + 0.5 * height
		ctx.translate(x,y)
			
		旋转
			ctx.rotate（（math.pi/180）*deg）
		恢复
		ctx.translate(-x,-y)
	*/ 
	ctx.rotate（（math.pi/180）*deg）

	//缩放
	ctx.scale(x,y)
```

### 15.合成
```js
	//类似于ps中的相切相交，在使用的时候先绘制一个图形在后面要绘制的图形前加上此条代码
	ctx.globalCompositeOperation = 'type'

	//仅在新形状和目标画布重叠的地方绘制新形状。其他一切都是透明的。
	ctx.globalCompositeOperation = 'source-in'


	//新形状绘制在不与现有画布内容重叠的位置
	ctx.globalCompositeOperation = 'source-out'
	

	//新形状仅在与现有画布内容重叠的位置绘制。
	ctx.globalCompositeOperation = 'source-atop'
	

	//在现有画布内容后面绘制新形状。
		ctx.globalCompositeOperation = 'destination-over'


	//现有画布内容保留在新形状和现有画布内容重叠的位置。其他一切都是透明的。
	ctx.globalCompositeOperation = 'destination-in'

	//现有内容保留在不与新形状重叠的位置。
	ctx.globalCompositeOperation = 'destination-out' 
	
	//现有画布仅保留在与新形状重叠的位置。新形状绘制在画布内容后面。
	ctx.globalCompositeOperation = 'destination-atop'
```