// 创建一个新的名称数组。
// 编写一个新函数来检查名称是否在数组中。此函数应将名称作为参数并返回布尔值。
// 使用此函数检查数组中是否存在各种名称并记录结果。

    let names: string[] = ['bob', 'join', 'az'];
    function checkName(name: string): boolean {
        return names.includes(name)
    }
    console.log(checkName('bob'));
    let nameToCheck: string = 'bob'
    let inlist: boolean = checkName(nameToCheck);
    if (inlist) {
        console.log(`${nameToCheck}在列表中`);
    } else {
        console.log(`${nameToCheck}不在列表中`);
    }