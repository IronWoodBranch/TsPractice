//类型顺序
//1.any任意类型，可能类似于var；unknow不知道类型；这两个是top type，顶级类型
//2.Object
//3.Number，String，Boolean 箱
//4.number，string，boolean
//5.1，'mol'，false
//6.never

//以上内容向下兼容

//eg.1,声明为any类型（1），可以赋值为false（4）
let b:any=false
console.log(b)


//2.unknow和any差异：unknow不能给更小级别的变量，但any可以；因此unknown更加安全，有限制总是更安全的
//eg.2-1 any和别的类型可以互相赋值
let c:any =5
let d:number =1
c=d
d=c
//2.2 unknow不能给别人，只有unkonw和any才可以接受unknow

//2.3 unknow不能读属性和方法，但any可以

//eg.2-3，如下，any可以直接这么调用，any不行
//vs里面记得保存了再运行，低级错误
let read:any={开心:true,close:()=>123}
console.log(read.开心)
console.log(read.close())
