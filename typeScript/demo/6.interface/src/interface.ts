interface User{
    name:string;
    age:number;
    greet(phrase:string):void;
}
let user1:User

user1={
    name:'max',
    age:20,
    greet(phrase:string){
        console.log(phrase);
    }
}
user1.greet('hello')