//?在数字枚举中，TypeScript 会创建从数值到枚举成员名称的反向映射。
//?这意味着，如果您将数值分配给枚举成员，则可以在任何需要枚举类型的地方使用该数值。

//?在字符串枚举中，TypeScript 不会创建反向映射。这意味着，如果您将字符串值分配给枚举成员，则不能在任何需要枚举类型的位置使用该字符串值。
//?您必须使用枚举成员本身。
//! 字符串只支持正向映射不支持反向映射  如果是反向映射那么输出的结果就是undefined
//! 数字支持正向映射和反向映射

//@ TypeScript 中的枚举不仅可以从名字到值的映射（正向映射），还支持从值到名字的映射（反向映射）。这意味着你可以使用枚举的值来得到对应的名称。

// enum ServerResponseStatus {
//     Success = 'Success',
//     Error = 'Error',
//   }
  
//   Object.values(ServerResponseStatus).forEach((value) => {
//     console.log(value);
//   });


  //--------------------------------------------------
//   enum ServerResponseStatus {
//     Success = 200,
//     Error = 500,
//   }
  
//   Object.values(ServerResponseStatus).forEach((value) => {
//     if (typeof value === 'number') {
//       console.log(value);
//     }
//   });

//---------------------------------------------------------
enum NumericEnum {
    Member = 1,
    get,
    set=5,
    item
  }
  
  enum StringEnum {
    Member = 'Value',
  }
  console.log(NumericEnum);
  
  let numericEnumValue: NumericEnum = 1; // This is allowed
  console.log(numericEnumValue); // 1
  
  let stringEnumValue: StringEnum = 'Value'; // This is not allowed