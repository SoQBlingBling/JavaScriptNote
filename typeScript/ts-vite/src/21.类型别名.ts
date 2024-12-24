//TypeScript 中的类型别名是现有类型的新名称或简写，可让您更轻松地重用复杂类型。
//但需要注意的是，它不会创建新的唯一类型 - 它只是一个别名。所有相同的规则都适用于别名类型，包括将属性标记为可选或只读的能力。

const john: { id: number; name: string; isActive: boolean } = {
  id: 1,
  name: 'john',
  isActive: true,
};
const susan: { id: number; name: string; isActive: boolean } = {
  id: 1,
  name: 'susan',
  isActive: false,
};

function createUser(user: { id: number; name: string; isActive: boolean }): {
  id: number;
  name: string;
  isActive: boolean;
} {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}
type User = { id: number; name: string; isActive: boolean };

const john: User = {
  id: 1,
  name: 'john',
  isActive: true,
};
const susan: User = {
  id: 1,
  name: 'susan',
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  return user;
}

type StringOrNumber = string | number; // Type alias for string | number

let value: StringOrNumber;
value = 'hello'; // This is valid
value = 123; // This is also valid

type Theme = 'light' | 'dark'; // Type alias for theme

let theme: Theme;
theme = 'light'; // This is valid
theme = 'dark'; // This is also valid

// Function that accepts the Theme type alias
function setTheme(t: Theme) {
  theme = t;
}

setTheme('dark'); // This will set the theme to 'dark'