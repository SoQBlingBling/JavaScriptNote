//Book 类中的 checkedOut 属性是一个实例属性（或成员变量）。它没有在构造函数中专门设置，因此也可以称为默认属性或具有默认值的属性。
class Book {
  title: string;
  author: string;
  checkedOut: boolean = false;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

const deepWork = new Book('deep work ', 'cal newport');
deepWork.checkedOut = true;
// deepWork.checkedOut = 'something else';