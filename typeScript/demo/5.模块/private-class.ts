/**
 * singleton模式, 私有constructor, 私有class无法继承无需主动实列化, 只需调用准备好的静态函数即可
 */

 class TestPrivateClass {

    private static instance: TestPrivateClass;
    private constructor(){

    }

    static getInstance() {
        if( TestPrivateClass.instance ){
            return this.instance;
        }
        return this.instance = new TestPrivateClass();
    }
}

const ctest = TestPrivateClass.getInstance();
console.log( ctest );
