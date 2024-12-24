/*首先使用 interface 关键字定义接口 Computer。这将作为此类型对象的蓝图。
在界面内部，定义对象应具有的属性。在本例中，我们有 id、brand、ram 和 storage。
在 id 属性前使用 readonly 关键字来表明一旦设置就无法更改。
在存储属性后使用 ? 来指示该属性是可选的，并且可能并不存在于该类型的所有对象上。
另外，在接口内部，定义对象应该具有的任何方法。在本例中，我们有 upgradeRam，它是一个接受数字并返回数字的函数。
现在我们有了接口，我们可以创建一个遵循该接口的对象。该对象应该具有接口中定义的所有属性（可选属性除外，它们是可选的），并且应该实现方法。
最后，我们可以使用我们的对象。我们可以调用它的 upgradeRam 方法来增加它的 RAM。
*/
interface Computer {
    readonly id: number; // cannot be changed once initialized
    brand: string;
    ram: number;
    upgradeRam(increase: number): number;
    storage?: number; // optional property
  }
  
  const laptop: Computer = {
    id: 1,
    brand: 'random brand',
    ram: 8, // in GB
    upgradeRam(amount: number) {
      this.ram += amount;
      return this.ram;
    },
  };
  
  laptop.storage = 256; // assigning value to optional property
  
  console.log(laptop.upgradeRam(4)); // upgrades RAM by 4GB
  console.log(laptop);