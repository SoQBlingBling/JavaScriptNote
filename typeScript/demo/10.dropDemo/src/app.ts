
/**
 * 
 *  a) 创建class获取input标签  
 *      1)通过importNode 复制template中的html元素 
 *      2)通过insertAdjacentElement 将元素追加
 *      3)在类中实现 提交  校验  清空的方法
 *          i)提交：通过装饰器修改this的指向
 *          ii)校验：在提交中实现校验 通过接口限制输入框输入的内容  通过if判断返回所取到的值
 *          iii)清空：在提交完成无误之后进行清空
 * b) 创建class获取列表的section
 *      1)通过importNode 复制template中的html元素
 *      2)通过insertAdjacentElement 将元素追加在#app内部末尾（beioforeend ）
 *      3)在类中去修改 template内容 分别赋值不同的id
 * 
 * */

// 验证输入内容接口
interface validatable {
    // 输入的值
    value: string | number;
    // 最小长度   为选填内容
    minLength?: number;
    // 最大长度   为选填内容
    maxLength?: number;
    // 是否为必填   为选填内容
    required?: boolean;
    // 限制内容最大值   为选填内容
    max?: number;
    // 限制内容最小值   为选填内容
    min?: number;
}
// 
function validata(validatableInput: validatable) {
    let isValid = true;
    // 判断是否为必填项
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length > 0;
    }
    // 判断填写最大长度
    if (validatableInput.maxLength != null && typeof validatableInput.value === 'string') {
        isValid = isValid && validatableInput.value.length <= validatableInput.maxLength;
    }
    // 判断填写最小长度
    if (validatableInput.minLength != null && typeof validatableInput.value === 'string') {
        isValid = isValid && validatableInput.value.length >= validatableInput.minLength;
    }
    // 判断内容与最大值
    if (validatableInput.max != null && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value <= validatableInput.max;
    }
    // 判断内容与最小值    
    if (validatableInput.min != null && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value >= validatableInput.min;
    }
    return isValid
}

// 装饰器
function autoBind(tag: any, methodName: string, descriptor: PropertyDescriptor) {
    const originMethod = descriptor.value;
    console.log(descriptor);

    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        // 当你试图访问这个函数时就会执行这个函数
        get() {
            const bindFn = originMethod.bind(this);
            return bindFn
        }
    }
    return adjDescriptor
}
// 收集用户输入的数据
class ProjectStatus {
    private listeners:any[] = [];
    private projects: any[] = [];
    private static instance: ProjectStatus;
    private constructor() {


    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectStatus
        return this.instance
    }
    addProject(title: string , description: string, people: number) {
        const newProject = {
            title,
            description,
            people,
            id: Math.random().toString()
        }
        this.projects.push(newProject)
        for(const lisener of this.listeners){
            // 通过slice 进行深拷贝   不修改原数组
            lisener(this.projects.slice())           
        }
    }
    addLisener(lisenerFn:Function){
        this.listeners.push(lisenerFn);
    }
}

// 整个程序中始终只有一个该类型的对象 ，状态管理对象
const projectState = ProjectStatus.getInstance();

// 列表类的构建
class ProjectList {
    tempalteEl: HTMLTemplateElement;
    hostEL: HTMLDivElement;
    element: HTMLElement;
    assignedProjects:any[] ;
    constructor(private type: "active" | "finished") {
        //tempalete 标签
        this.tempalteEl = document.getElementById('project-list')! as HTMLTemplateElement;
        // div 标签
        this.hostEL = document.getElementById("app")! as HTMLDivElement;
        // 复制标签的内容
        const importNode = document.importNode(this.tempalteEl.content, true);
        // 获取到 form
        this.element = importNode.firstElementChild as HTMLElement;
        console.log(this.element)
        this.assignedProjects =[]
        this.element.id = `${this.type}_project`;
        projectState.addLisener((projects:any)=>{
            this.assignedProjects = projects;
            this.renderProjects()
        })
        this.renderContent()
        this.attach();
    }
    //在目标元素的开头之后插入它
    private attach() {
        this.hostEL.insertAdjacentElement('beforeend', this.element)
    }
    // 在模板中渲染内容
    private renderContent() {
        const listId = `${this.type}_list`;
        this.element.querySelector('ul')!.id = listId;
        this.element.querySelector('h2')!.textContent = `${this.type}_列表`
    }
    private renderProjects(){
        const listEl = document.querySelector(`#${this.type}_list`)!;

        
        for(const item of this.assignedProjects){
            console.log(item);
            const listItem = document.createElement('li');
            listItem.textContent = item.title;
            listEl.appendChild(listItem)
        }
    }

}


// 获取input 输入框
class ProjectInput {
    tempalteEl: HTMLTemplateElement;
    hostEL: HTMLDivElement;
    element: HTMLFormElement;
    titleInputEl: HTMLInputElement;
    descriptionInputEL: HTMLInputElement;
    peopleInputEl: HTMLInputElement;
    constructor() {
        //tempalete 标签
        this.tempalteEl = document.getElementById('project-input')! as HTMLTemplateElement;
        // div 标签
        this.hostEL = document.getElementById("app")! as HTMLDivElement;
        // 复制标签的内容
        const importNode = document.importNode(this.tempalteEl.content, true);
        // 获取到 form
        this.element = importNode.firstElementChild as HTMLFormElement;
        this.attach();

        // 获取标题输入框
        this.titleInputEl = document.querySelector("#title")! as HTMLInputElement;
        // 获取描述输入框
        this.descriptionInputEL = document.querySelector("#description")! as HTMLInputElement;
        // 获取用户输入框
        this.peopleInputEl = document.querySelector("#people")! as HTMLInputElement;

        this.configure()
    }
    // 清空输入框
    private clearInput() {
        this.titleInputEl.value = '';
        this.peopleInputEl.value = '';
        this.descriptionInputEL.value = '';

    }
    // 获取输入框的值
    private getUserVal():[string,string,number] |void {
        // 获取 title、 people 、 Description 的值
        const titleVal = this.titleInputEl.value;
        const peopleVal = this.peopleInputEl.value;
        const descriptionVal = this.descriptionInputEL.value;

        // 设置标题规范
        const titleValidatable: validatable = {
            value: titleVal,
            required: true,
        }
        // 设置详情规范
        const desValidatable: validatable = {
            value: descriptionVal,
            required: true,

        }
        // 设置人数规范
        const peopleValdatable: validatable = {
            value: +peopleVal,
            min: 1,
            max: 10,
            required: true
        }
        // if (titleVal.trim().length === 0 || peopleVal.trim().length === 0 || descriptionVal.trim().length === 0) {
        if (
            !validata(titleValidatable) ||
            !validata(desValidatable) ||
            !validata(peopleValdatable)
        ) {
            throw new Error("有字段未填写,请填写完整");
            console.log(validata(titleValidatable),
                validata(desValidatable),
                validata(peopleValdatable))
        } else {
            return [titleVal, descriptionVal, +peopleVal]
        }
    }
    // 点击提交执行的代码
    @autoBind
    private submitHandler(evnet: Event) {
        evnet.preventDefault();
        const userinput = this.getUserVal()
        if (Array.isArray(userinput)) {
            const [titleVal, descriptionVal, peopleVal] = userinput;
            console.log(titleVal, descriptionVal, peopleVal)
            projectState.addProject(titleVal, descriptionVal, peopleVal)
            this.clearInput()
        }
    }

    // 提交
    private configure(): [string, string, number] | void {
        this.element.addEventListener('submit', this.submitHandler);

    }

    //在目标元素的开头之后插入它
    private attach() {
        this.hostEL.insertAdjacentElement('afterbegin', this.element)
    }
}

const prjInput = new ProjectInput();
const activeList = new ProjectList('active');
const finishedList = new ProjectList('finished');



