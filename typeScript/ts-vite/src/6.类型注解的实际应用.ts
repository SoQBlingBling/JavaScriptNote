//将 foundBook 明确键入为 string | undefined 的原因是为了让任何阅读代码的人（包括未来的你自己）都清楚，
//foundBook 在运行时可能未定义。这在 TypeScript 中是一种很好的做法，因为它有助于防止与未定义值相关的错误。
const books = ['1984', 'Brave New World', 'Fahrenheit 451'];

let foundBook: string | undefined;

for (let book of books) {
  if (book === '1984') {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}

console.log(foundBook?.length);