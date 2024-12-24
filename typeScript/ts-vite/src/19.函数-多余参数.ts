/*

TypeScript 仅对使用对象文字的地方执行多余的属性检查，而不是对它们的引用执行多余的属性检查。

在 TypeScript 中，当你将对象文字（如 { id: 1, name: 'bob', email: ' bob@gmail.com ' }）直接传递给函数或将其分配给具有指定类型的变量时，
TypeScript 会检查该对象是否仅包含已知属性。这样做是为了捕获常见错误。
但是，当你将 newStudent 传递给 createStudent 时，TypeScript 不会抱怨 email 属性。这是因为 newStudent 在传递给 createStudent 时不是对象文字。

*/

function createStudent(student: { id: number; name: string }) {
    console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
  }
  
  const newStudent = {
    id: 5,
    name: 'anna',
    email: 'anna@gmail.com',
  };
  
  createStudent(newStudent);
  createStudent({ id: 1, name: 'bob', email: 'bob@gmail.com' });