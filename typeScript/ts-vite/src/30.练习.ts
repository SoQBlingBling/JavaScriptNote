/*
定义 Person 接口首先定义一个具有字符串类型 name 属性的 Person 接口。
定义 DogOwner 接口 接下来，定义一个 DogOwner 接口，

该接口扩展 Person 并添加一个字符串类型的 dogName 属性。
定义 Manager 接口然后，定义一个 Manager 接口，
该接口扩展 Person 并添加两个方法：managePeople 和 delegateTasks。这两个方法的返回类型都应该为 void。

定义 getEmployee 函数现在，定义一个名为 getEmployee 的函数，
该函数返回 Person、DogOwner 或 Manager。在此函数中，生成一个随机数并使用它来决定要返回哪种类型的对象。如果该数字小于 0.33，则返回 Person。如果小于 0.66，则返回 DogOwner。否则，返回 Manager。

最后，创建一个名为 employee 的变量，可以是 Person、DogOwner 或 Manager，
并将 getEmployee 的返回值赋给它。然后，将 employee 记录到控制台。

*/
interface Person{
    name:string,
}
interface DogOwner extends Person{
    dogName:string,
}
interface Manager extends Person{
    managePeople():void,
    delegateTasks(): void;
}
function getEmployee(): Person | DogOwner | Manager {
    const random = Math.random();
  
    if (random < 0.33) {
      return {
        name: 'john',
      };
    } else if (random < 0.66) {
      return {
        name: 'sarah',
        dogName: 'Rex',
      };
    } else {
      return {
        name: 'bob',
        managePeople: () => console.log('Managing people...'),
        delegateTasks: () => console.log('Delegating tasks...'),
      };
    }
  }

  const employee: Person | DogOwner | Manager = getEmployee();
console.log(employee);
// function isManager(obj: Person | DogOwner | Manager): boolean {
//   return 'managePeople' in obj;
// }

function isManager(obj: Person | DogOwner | Manager): obj is Manager {
    return 'managePeople' in obj;
  }
  
  if (isManager(employee)) {
    employee.delegateTasks();
  }