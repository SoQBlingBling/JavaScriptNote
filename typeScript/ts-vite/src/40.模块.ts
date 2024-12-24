// 如果您的 TypeScript 文件不是模块（即它们没有任何 import 或 export 语句），它们将被视为全局范围内的脚本。在这种情况下，在两个不同的文件中声明相同的变量会导致冲突。

// 教程.ts

// let name = 'shakeAdnBake';

// const susan = 'susan';

// export let something = 'something';
// 动作.ts

// const susan = 'susan';

// export const something = 'something';
// tsconfig.json

// "moduleDetection": "force",
// 输出
// tsconfig.json

// "module": "ESNext",