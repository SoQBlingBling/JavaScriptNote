class UserItem {
    userName:string;
    private employees:string[] = [];
    protected sex:string ='';
    static staticTest:string = '456';
    constructor(readonly id:number,n:string){
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
    static printuserName(n:string){
        return {userName:n}
    }
}
let zs = new UserItem(20,'张三')
console.log(zs)
// zs.id = 30
zs.describe();
zs.addEmployees('李四')
zs.printEmployees()
// const accountingCopy = {
//     userName:'ww',
//     describe:zs.describe
// }
// accountingCopy.describe()

// 继承
class itClass extends UserItem{
    constructor(id:number,n:string){
        super(id,n)
    }
}
const ww = new itClass(123,'王五')
ww.describe()
console.log(ww)

console.log(UserItem.printuserName('max'), UserItem.staticTest)
