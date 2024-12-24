export function sayHello(name: string): void {
    console.log(`Hello ${name}!`);
  }
  
  export let person = 'susan';
  
  export type Student = {
    name: string;
    age: number;
  };
  
  const newStudent: Student = {
    name: 'peter',
    age: 24,
  };
  
  export default newStudent;
  // import newStudent, { sayHello, person, type Student } from './actions';
  
  sayHello('TypeScript');
  console.log(person);
  console.log(newStudent);
  
  const anotherStudent: Student = {
    name: 'bob',
    age: 23,
  };
  
  console.log(anotherStudent);