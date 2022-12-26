const val1 = document.getElementById('val1')! as HTMLInputElement;
const val2 = document.getElementById('val2')! as HTMLInputElement;
const btn = document.querySelector('button');
function add (num1:number,num2:number) {
    return num1+num2
}
btn.addEventListener('click',function(){
    console.log(add(+val1.value,+val2.value))
})
