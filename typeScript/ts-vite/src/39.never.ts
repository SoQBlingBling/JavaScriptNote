//在 TypeScript 中，never 是一种表示永远不会发生的值的类型。
//您不能将任何值赋给 never 类型的变量。如果有任何未处理的情况，TypeScript 将给出编译错误，以帮助确保处理所有情况。
// let someValue: never = 0;

type Theme = 'light' | 'dark';

function checkTheme(theme: Theme) {
  if (theme === 'light') {
    console.log('light theme');
    return;
  }
  if (theme === 'dark') {
    console.log('dark theme');
    return;
  }
  theme;
  // theme is of type never, because it can never have a value that is not 'light' or 'dark'.
}



enum Color {
    Red,
    Blue,
    // Green,
  }
  
  function getColorName(color: Color) {
    switch (color) {
      case Color.Red:
        return 'Red';
      case Color.Blue:
        return 'Blue';
      default:
        // at build time
        let unexpectedColor: never = color;
        // at runtime
        throw new Error(`Unexpected color value: ${unexpectedColor}`);
    }
  }
  
  console.log(getColorName(Color.Red)); // Red
  console.log(getColorName(Color.Blue)); // Blue
  // console.log(getColorName(Color.Green)); // Green