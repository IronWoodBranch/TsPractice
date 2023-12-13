//1.泛型约束：给泛型指定类型，然后可以用这个类型的一些方法，例如number的相加
//2.keyof用法

function addGeneric<T extends number>(a:T,b:T)
{
    return a+b;
}
console.log(addGeneric(1,2))

//2.keyof用法
//keyof可以拿到一个对象的key

let genericConst ={
    name:"mol",
    sex:"male"
}
//鼠标放到mt上去，会发现mt变成了这个类所有键的联合属性
type mt=keyof typeof  genericConst

//然后利用keyof做泛型约束，可以保证传入的值是对象的key,见如下第二个参数
function getThekey<T extends object,K extends keyof T>(genericConst:T,arg6:K)
{
    return genericConst[key]
}


console.log(getThekey(genericConst,'name'))