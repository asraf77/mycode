import{useEffect, useState} from "react"
export default function Effect(){
    const[count,setCount]=useState(1)
    function handleState(){
        setCount(count+1)
    }
    useEffect(()=>{
        document.title=`count:${count}`
    }
    )
    return(
        <div>
            <h3>statevalue:{count}</h3>
            <button onClick={handleState}>Incrementstate</button>
        </div>
    )
}