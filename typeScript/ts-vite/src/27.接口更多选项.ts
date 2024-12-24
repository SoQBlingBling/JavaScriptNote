//通常，最好将接口结构与实现对象或类尽可能匹配。这样可以使代码更易于理解和维护。
//因此，如果将 printAuthor 定义为 Book 接口中的方法，则将其实现为 deepWork 对象中的方法会更一致。
interface Book {
    readonly isbn: number;
    title: string;
    author: string;
    genre?: string;
    // method
    printAuthor(): void;
    printTitle(message: string): string;
    printSomething: (someValue: number) => number;
  }
  
  const deepWork: Book = {
    isbn: 9781455586691,
    title: 'Deep Work',
    author: 'Cal Newport',
    genre: 'Self-help',
    printAuthor() {
      console.log(this.author);
    },
    printTitle(message) {
      return `${this.title} ${message}`;
    },
    // first option
    // printSomething: function (someValue) {
    //   return someValue;
    // },
    // second option
    printSomething: (someValue) => {
      // "this" gotcha
      console.log(deepWork.author);
      return someValue;
    },
    // third option
    // printSomething(someValue) {
    //   return someValue;
    // },
    // alternative
    // printAuthor: () => {
    //   console.log(deepWork.author);
    // },
  };
  console.log(deepWork.printSomething(34));
  
  deepWork.printAuthor();
  const result = deepWork.printTitle('is an awesome book');
  console.log(result);