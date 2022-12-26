interface GetName{
    name:string;
}
interface GetPlay extends GetName{
    play(n:string):void;
}
class TestClass implements GetPlay{
    name:string;
    constructor(n:string){
        this.name =  n
    }
    play(n:string){
        console.log(this.name +'正在'+n)
    }
}
 let b = new TestClass('王五')
 b.play('吃饭')
