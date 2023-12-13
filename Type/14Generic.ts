//泛型用法

function genericMeth<T>(arg1:T,arg2:T)
{
    console.log(arg1,arg2)
}

genericMeth(1,2)

//当有多个泛型时，返回值可以用联合类型

function genericMeth2<T,K>(arg3:T,arg4:K):Array<T | K>
{
    let i:number
    for ( i = 3 ;i >= 1; i--)
    {
        console.log(2)
    }
    return [arg3];
}