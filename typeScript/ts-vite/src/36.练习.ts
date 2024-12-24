/*
定义一个名为 UserRole 的枚举，其成员包括 Admin、Manager 和 Employee。
定义一个名为 User 的类型别名，其属性为 id（数字）、name（字符串）、role（UserRole）和 contact（包含两个元素的元组：字符串形式的 email 和字符串形式的 phone）。
定义一个名为 createUser 的函数，该函数以 User 对象作为参数并返回一个 User 对象。
使用与 User 类型匹配的对象调用 createUser 函数，将结果存储在变量中，并将变量记录到控制台。

*/
enum UserRole {
  Admin,
  Manager,
  Employee,
}

type User= {
    id:number,
    name:string,
    role:UserRole,
    contact:[string,string]
}
function createUser(user:User):User{
    return user

}
const user: User = createUser({
    id: 1,
    name: 'John Doe',
    role: UserRole.Admin,
    contact: ['john.doe@example.com', '123-456-7890'],
  });
  
  console.log(user);