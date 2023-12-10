//枚举，和C#一样

//注意是赋值
enum color
{
    red=0,
    blue=1,
    green=2
}

//默认0开始，然后自增
enum color2
{
    red=0,
    blue,
    green
}
console.log(color.blue)
console.log(color2.blue)