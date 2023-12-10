//1.联合类型
//2.交叉类型
//3.类型断言

import { get } from "http";


//应用：项目中做多个的类型检定

//1.联合类型
//变量联合类型
let phonenumber : number | string ="080-9999-9999"
console.log(phonenumber)
phonenumber = 11231323123;
console.log(phonenumber)

//函数联合类型
function toGetBool(paraNum:number | boolean):boolean
{
    if(typeof(paraNum)=="number")
    {
        //数字！取到false，再！取到true
        return !!paraNum
    }
    else{
        return paraNum
    }
}

console.log(toGetBool(12))
console.log(toGetBool(false))



//2.交叉类型
//类似于extends，可以扩展一个拥有两边接口的所有属性的变量
//用于减少一些阅读代码的负担，不创建新类，但可以清晰理解传入参数的语义

interface user
{
    id:number,
    nickname:string
}

interface bill 
{
    payment:number
}

//这里好像没有加入this，也可以直接调，可能跟严格模式有关
function getBill(theUser:user & bill):number{
    return theUser.payment;
}
//在这里传入对象时，必须是拥有两个类全部成员的对象，说明交叉成功了
console.log(getBill({
    id:123,
    nickname:"mol",
    payment:1500
}))



//3.类型断言
//类型断言之前，有些成员变量无法直接.出来，断言后可以

interface assertDemoA
{
    name:string 
}

interface assertDemoB
{
    age:number
}

//如下所示，本来联合类型，无法判断入参也无法调用变量，此时可以断言
//但是慎用，有缺陷，因为它实际上无法避免运行时错误
function asserFunc(assertPara:assertDemoA | assertDemoB)
{
    return (assertPara as assertDemoB).age;
}


//类型断言不具备影响力

//如下，在返回值中，把返回值as布尔类型
function getBool(somethin:any):boolean
{
    return somethin as boolean;
}

//实际上返回值应该是1
console.log(getBool(1))

