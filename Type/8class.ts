//ES6的规范：class

//1.class的定义与规范（接口）


//和后端语言一样
interface Options
{
    el:string | HTMLElement
}

interface Vuecls
{
    options:Options
    init():void
}

//和c#一样，实现接口
class Vue implements Vuecls{
    options : Options
    //ts中必须写构造函数
    constructor(options:Options){
        this.options = options
    }
    init():void{

    }
}


//原来vue中的这句是新建Vue类变量，然后传入el的意思
new Vue({
    el:'#app'
})