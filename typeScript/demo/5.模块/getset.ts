type TypeScript = string | number;
class TestClass {
    private testprivate:TypeScript ='';
    constructor ( ){

    }
    get testGet(){
        if(this.testprivate){

            return this.testprivate
        }
        throw new Error('没有数据');
        
    }
    set testSet(val:TypeScript){
        if(!val){
            throw new Error('请传入正确的数据')
        }
        this.testprivate = val
    }
}
let newclass = new TestClass();
newclass.testSet = '私有数据通过set方法进行访问'
newclass.testGet

