//Getter 和 setter 是类中的特殊方法，允许您控制如何访问和修改属性。它们的使用方式像属性而不是方法，因此您不需要使用括号来调用它们。
class Book {
    private checkedOut: boolean = false;
    constructor(public readonly title: string, public author: string) {}
    get info() {
      return `${this.title} by ${this.author}`;
    }
  
    private set checkOut(checkedOut: boolean) {
      this.checkedOut = checkedOut;
    }
    get checkOut() {
      return this.checkedOut;
    }
    public get someInfo() {
      this.checkOut = true;
      return `${this.title} by ${this.author}`;
    }
  }
  
  const deepWork = new Book('deep work', 'cal newport');
  console.log(deepWork.info);
  // deepWork.checkOut = true;
  console.log(deepWork.someInfo);
  console.log(deepWork.checkOut);