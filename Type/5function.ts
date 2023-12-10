//1.函数定义和类型的返回，箭头函数的定义
//跟后端语言一致，用function代替后端中不写的类，用ts特有的：来声明返回值类型和参数类型，不错，感觉初步把握到ts的语法逻辑了
//eg. 1.1
function add23(paraA:number,paraB:number):number {
    return paraA+paraB
}
console.log(add23(1,2))
//eg. 1.2
//箭头函数
//注意点1.这里不能用function去装，因为本质是一个匿名函数处理好之后的结果，是个值，所以用const
//2.同样由于这里本质上是赋值，而不是声明，所以这个add2是个等号
const add2= (paraAInLamda:number,paraBInlamda:number):number=>paraAInLamda+paraBInlamda;
console.log(add2(2,3))

//2.默认参数和可选参数
//默认参数像let一样后面赋值即可，注意，如果传参，会覆盖默认参数
//可选参数加问号
//eg2.严格模式会报错，
function add3(paraAdd3:number =10,parabAdd3:number):number{
    return paraAdd3+parabAdd3;
}

//eg.2_2 传对象
//定义的时候入参无需注意
//调用的时候，直接放对象进去即可，不用额外声明
interface objforAdd
{
    objAddA:number,
    objAddB:number
}
function addObj (objAdd:objforAdd) : number
{
    return objAdd.objAddA+objAdd.objAddB;
}
console.log("this is addObj"+addObj({objAddA:1,objAddB:2}))

//3.this的用法，要在接口中就指定好this，不然可能报错

//eg3
//再次注意，let是赋值，要跟等号搭配
//经验1.interface中不能写实现，实现在let中写，而且记得等号
//经验2.记得方法要跟一致
//经验3.别被interface这个关键词迷惑了，把它当成类来处理，继承并赋值之后就有实例了
//经验4.在接口中定义方法的时候，直接方法名：lamda就可以了
interface thisDemo
{
    addPara:number[]
    addNmb:(this:thisDemo,paraTobeAdd:number)=>void
}
let thisDemoImp:thisDemo =
{
    addPara:[1,2,3],
    addNmb(this:thisDemo ,paraTobeAdd:number){
        this.addPara.push(paraTobeAdd);
    },
}

thisDemoImp.addNmb(4);
console.log(thisDemoImp)


//4.重载
//估计和后端语言差不多
//注意区别：function和变量都可以在类外单独存在

let addDemoArr :number[] = [1,2,3];
function addDemo(idArr:number[]):number[];
function addDemo(id:number):number[];
function addDemo():number[];

function addDemo(para111?:number | number[]):number[]
{
    if(typeof(para111)=="number")
    {
        return addDemoArr.filter(p=>p==para111)
    }
    else if(Array.isArray(para111))
    {
        addDemoArr.push(...para111)
        return addDemoArr;
    }
    else
    {
        return addDemoArr
    }
}
addDemo(1)
console.log(addDemoArr)
addDemo([4,5,6])
console.log(addDemoArr)
addDemo()
console.log(addDemoArr)

