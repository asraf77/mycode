import { useState } from 'react';
export default function FunctionComponent(){
    const [count,setCount]=useState(0);
    function handleIncrement(){
        setCount(count+1)
    }
    function handleDecrement(){
        setCount(count -1)
    }
    return(
        <div>
            <h1>i am in function</h1>
            <h3>Statevalue:{count}</h3>
            <button onClick={handleIncrement}>handle increment</button>
            <button onClick={handleDecrement}>handle decrement</button>
        </div>
    )

}