//  箭头函数

const add = (num1: number, num2: number) => {
    return num1 + num2

}
add(3, 4)

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', (even) => { console.log(even) })
}


// 默认函数参数
const addNum = (num1: number, num2: number =5) => {
    return num1 + num2

}

console.log(addNum(1))

// 展开运算符
 let arr = [1,2,3];
let arr2 = [4,5,6];
arr.push(...arr2)

// 剩余参数

const restParameters = (...person:Array<number>)=>{
    
}
restParameters(3,6,8,2)



// 数组和对象的结构
const [a,b,c] = arr; //数组

const person = {
    firsName:'zhangsan',
    age:20
};
const {  firsName, age:myAge} = person








