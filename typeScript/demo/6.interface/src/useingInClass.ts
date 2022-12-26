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