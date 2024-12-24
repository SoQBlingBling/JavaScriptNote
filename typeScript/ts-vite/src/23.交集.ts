
//在 TypeScript 中，交集类型 (TypeA & TypeB) 是一种将多种类型合并为一种类型的方式。
//这意味着交集类型的对象将具有 TypeA 的所有属性和 TypeB 的所有属性。这是一种创建合并现有类型的属性的新类型的方式。
type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };
const book1: Book = {
  id: 2,
  name: 'How to Cook a Dragon',
  price: 15,
};

const book2: Book = {
  id: 3,
  name: 'The Secret Life of Unicorns',
  price: 18,
};

const discountedBook: DiscountedBook = {
  id: 4,
  name: 'Gnomes vs. Goblins: The Ultimate Guide',
  price: 25,
  discount: 0.15,
};