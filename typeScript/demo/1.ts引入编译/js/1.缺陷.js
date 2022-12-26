const val1 = document.getElementById('val1')
const val2 = document.getElementById('val2')
const btn = document.getElementById('btn')
function add (num1,num2) {
    return num1+num2
}
btn.addEventListener('click',function(){
    console.log(add(val1.value,val2.value))
})
