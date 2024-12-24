// 创建一个类型为 { brand: string, year: number } 的对象 bike 并为其分配一些值。然后，尝试将字符串分配给 year 属性。
// 创建一个类型为 { brand: string, year: number } 的对象 laptop ，并尝试为其分配一个缺少 year 属性的对象。
// 创建一个类型为 { title: string, price?: number }[] 的数组产品并为其分配一些值。然后，尝试向其中添加一个具有字符串类型 price 属性的对象。

    // 1
    let bike: { brand: string; year: number } = { brand: '美利达', year: 2022 };
    // 2
    let laptop: { brand: string; year?: number } = { brand: 'dell' };
    // 3
    let product1: { title: string, price: number } = { title: 'apple', price: 3 };
    let product2: { title: string } = { title: 'banana' };
    let shoping: { title: string; price?: number }[] = [product1, product2];