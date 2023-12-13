//

import { rejects } from "assert"
import { resolve } from "path"

const axios ={
    get<T>(url:string) :Promise<T>
    {
        return new Promise((resolve,reject)=>
        {
            let xhr:XMLHttpRequest = new XMLHttpRequest()
            xhr.open('GET',url)
            xhr.onreadystatechange = ()=>
            {
                if(xhr.readyState == 4&& xhr.status == 200)
                {
                    resolve(JSON.parse(xhr.responseText))
                }
            }
            xhr.send(null)
        })
    }
}

interface msg{
    name:string,
    hobby:string
}

axios.get<msg>('./msg.json').then(res=>{
    console.log(res)
});