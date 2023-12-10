//大纲：区别object,Object以及{}

//3.1 Object的内容跟原型链有关，所有的类最终指向的都是Object，所以可以接受所有类型
//接下来示例：所有的值赋给Object对象不会报错

//eg3,1数字，2字符串，3数组，4function，对象
let propEg:Object = 123;
let propEg2:Object = "123";
let propEg3:Object = [];
let propEg4:Object = ()=>123;
let propEg5:Object = {};

//3.2 object只接受引用类型，例如数组，功能，对象

//eg3.2 
let propEg3_2_1:object = []
let propEg3_2_2:object = ()=>111
let propEg3_3 :object ={}

//3.3 {}可以理解为new Object{}总体功效等同于3.1
//eg3.3 可以同时接收引用类型和值类型，和Object相同，有点像装箱拆箱

//由此引申的思考，在前端里，一个对象对值类型的限定是非常少的，而对引用类型是可以限定的，反而会不会导致，由值类型引起的错误和bug更隐蔽且难以排查
//这个类型少用为好
let propEg3_3_1:{} =123
let propEg3_3_2:{} =()=>123

