console.log('----------表单验证demo------------')
// 表单验证
interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[]; //required positive
    }
}

const registered: ValidatorConfig = {}

function Required(targ: any, propName: string) {
    registered[targ.constructor.name] = {
        ...registered[targ.constructor.name],
        [propName]: ['required']
    };
    console.log(registered[targ.constructor.name]);
}
function positiveNumber(targ: any, propName: string) {
    registered[targ.constructor.name] = {
        ...registered[targ.constructor.name],
        [propName]: ['positive']
    };
    console.log(registered[targ.constructor.name]);
}
function validate(obj: any) {
    const objValidatorConfig = registered[obj.constructor.name];
    console.log(Boolean(objValidatorConfig), objValidatorConfig)
    if (!objValidatorConfig) {
        return true
    }
    let isValid = true
    for (const prop in objValidatorConfig) {

        for (const validator of objValidatorConfig[prop]) {
            console.log(validator)
            switch (validator) {
                case 'required':

                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':

                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid
}
class Course {
    @Required
    title: string;
    @positiveNumber
    price: number;
    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

// 阻止表单提交
let form = document.querySelector('form')!;
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let titleEl = <HTMLInputElement>document.querySelector('#title')
    let priceEl = <HTMLInputElement>document.querySelector('#price')
    let title = titleEl.value;
    let price = +priceEl.value;
    let creatCourse = new Course(title, price)
    console.log(creatCourse);
    if (!validate(creatCourse)) {
        alert('出错叻')
    }
})