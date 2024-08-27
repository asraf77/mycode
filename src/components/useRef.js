import{useState,useRef}from"react"
export default function UseRef(){
    const[count,setCount]=useState(0);
    const data=useRef(0);

function HandleState(){
    setCount(count+1)
    console.log(count);
}
function HandleRef(){
    data.current=data.current+1
    console.log(data.current)
}
return(
    <div>
        <h1>StateValue:{count}</h1>
        <h1>RefValue:{data.current}</h1>
        <button onClick={HandleState}>Increment StateValue</button>
        <button onClick={HandleRef}>Increment RefValue</button>
    </div>
)

}