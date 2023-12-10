//数组基础

//1.数组的声明
//和别的语言感觉差不太多，只是ts用：代替声明，别的部分是一样的

//eg1
let arrayDemo1number:number[]=[1,2,3]
let arrayDemo1bool:boolean[]=[true,false]

//2.用泛型声明数组
let arrayDemo2number:Array<number>=[1,2,3]
let arrayDemo2boolea:Array<boolean>=[true,false,true]

//3.对象数组
interface objForArray
{
    name:string,
    age:number
}


let myObjArray:objForArray[]=[{name:"mol",age:26},{name:"bank",age:34}]
let myObjArra2y:Array<objForArray>=[{name:"mol",age:26},{name:"bank",age:34}]


//4.二维数组
let arrayTwoDimension : number[][] = [[1],[2,5],[3,1,2]]
let arrayThreeDimension : number[][][] = [[[1,2],[4,1],[37]],[[1,1],[2,2]]]

//5. ...是任意个数个参数