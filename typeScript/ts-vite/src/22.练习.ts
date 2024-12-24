//定义员工类型：创建一个具有属性 id（数字）、姓名（字符串）和部门（字符串）的员工类型。

//定义 Manager 类型：创建一个类型 Manager，其属性为 id（数字）、name（字符串）和 employees（Employee 数组）。

//创建联合类型：定义一个 Staff 类型，它是 Employee 和 Manager 的联合。

//创建 printStaffDetails 函数：此函数应接受 Staff 类型的参数。在函数内部，使用类型保护检查传递的对象中是否存在“employees”属性。如果存在，则打印一条消息，表明此人是经理，并显示其管理的员工人数。如果不存在，则打印一条消息，表明此人是员工，并显示其所属的部门。

//创建员工和经理对象：创建两个员工对象。一个名为 alice，另一个名为 steve。还创建一个名为 bob 的经理对象，负责管理 alice 和 steve。

//测试函数：以 alice 和 bob 作为参数调用 printStaffDetails 函数并验证输出。
type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff) {
  if ('employees' in staff) {
    console.log(
      `${staff.name} is a manager of ${staff.employees.length} employees.`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department.`
    );
  }
}

const alice: Employee = { id: 1, name: 'Alice', department: 'Sales' };
const steve: Employee = { id: 1, name: 'Steve', department: 'HR' };
const bob: Manager = { id: 2, name: 'Bob', employees: [alice, steve] };

printStaffDetails(alice); // Outputs: Alice is an employee in the Sales department.
printStaffDetails(bob);