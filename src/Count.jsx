import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0);
    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleReduce = () =>{
        const ReduceCount = count -1;
        setCount(ReduceCount);
    }
    return(
        <div>
            <h1>Counter : {count}</h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}