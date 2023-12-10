//本demo讲interface的的用法

//1：interface，我觉得和面向对象语言的interface是一样的，interface写成什么样，实现类就要写成什么样
//具体语法和c#一致
//如下,eg1
//1_1.在ts中，变量和类的赋值和C#中不同，不能直接忽略等号，我觉得这是前端特色，需要所见即所得并且统一，类和变量一样，是需要赋值的（但好像不是，因为声明接口的写法和后端语言是相同的）
//1_2.在类的赋值内部，我可以理解成构造函数中，赋值直接不需要let了，我觉得本质是不需要声明，因为该属性已经在接口中被声明好了，只需要在实现的地方赋值即可
//1_3.单双引号无区别
//1_4.ts中的声明同时赋值的习惯：let声明，等号赋值
interface myInterfaceDemo
{
    name:string,
    age:number
}

let interfaceDemo:myInterfaceDemo = 
{
    name:"mol",
    age:22
}




//2.interface的重用 重名
//我的理解是：像C#中的partial，必须全部实现，虽然分开写，但视为同一个接口/类写在了不同的位置
//这种写法感觉可读性不如extends，如果故意想达到这种效果，可能用extends更好
//这个问题年底复习再问问别人

//两个重名接口
interface myInterfaceDemo2
{
    name:string,
    profession:string
}

interface myInterfaceDemo2
{
    age:number
}

let myInterfaceDemo2Imp =
{
    name:"mol",
    age:26,
    profession:"programmer"
}

//3.extends，感觉跟重名效果一样
//eg3
interface myInterfaceDemo3
{
    name:string,
    weight:number
}
interface myInterfaceDemo4 extends myInterfaceDemo3
{
    height:number
}

let myInterfaceDemo4Imp:myInterfaceDemo4 = 
{
    name:"mol",
    weight:65,
    height:160
}


//索引签名与可选属性
//4.索引签名比较独特，它对对应的内容进行键的类型，值的类型的限定，但不限定个数
//重要-------------------------------------------------------------------
//一般用any，因为它会对本interface所有别的属性也限定
//应用场景：后端传来的对象有很多不需要的内容，直接一个any，这些东西就可有可无，需要的属性明文写出来即可

//eg.4只要键是string，值是number，就符合规则;
//如下，甚至可以没有
interface myInterfaceDemo5
{
    name:string
    [propName:string]:any
}

let myInterfaceDemo5Imp:myInterfaceDemo5=
{
    name:"mol"

}

//5可选属性，和c#的可空属性一样，用？来限定
//eg.5,如下，age为可空，实现类里面就可以什么都不写

interface myInterfaceDemo6
{
    name:string
    age?:number
}

let myInterfaceDemo6Imp : myInterfaceDemo6=
{
    name:"mol"
}


//6.readonly加到属性面前，可以让它不能被更改
//一般用于函数，不让人随便改，或者后台返过来的id，不让随便改

//eg6
interface myInterfaceDemo7
{
    readonly id:string,
    readonly myfunc:()=>123
}

//7.对函数的约束,和索引签名有点像，但其实不一样，是在lamda表达式的入参的地方规定类型，然后又规定这个表达式的返回值类型


//赋值的时候，=后面是function，而不是类，要注意
//这个fucntion后也不是lamda表达式，所以不能再用箭头函数，而是像个函数的声明，有点像重写
//eg7.如下
interface myInterfaceDemo8
{
    (name:string):string
}

let myImp:myInterfaceDemo8=function(abc:string)
{
    return "mol"
}

