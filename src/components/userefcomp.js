import{useState,useRef}from "react"
export default function UseRefcom(){
    const data1=useRef(null);
    const data2=useRef(null);
    const data3=useRef(null);
    function HandleRef1(){
        data1.current.focus();
        data1.current.style.backgroundColor="yellow";
        data2.current.style.backgroundColor="";
        data3.current.style.backgroundColor="";
    }
    function HandleRef2(){
        data2.current.focus();
        data1.current.style.backgroundColor="";
        data2.current.style.backgroundColor="yellow";
        data3.current.style.backgroundColor="";
    }
    function HandleRef3(){
        data3.current.focus();
        data1.current.style.backgroundColor="";
        data2.current.style.backgroundColor="";
        data3.current.style.backgroundColor="yellow";
    }
    return(
        <div>
            <input ref={data1}/>
            <button onClick={HandleRef1}>ClickHere</button><br/>
            <input ref={data2}/>
            <button onClick={HandleRef2}>ClickHere</button><br/>
            <input ref={data3}/>
            <button onClick={HandleRef3}>ClickHere</button><br/>
        </div>
    )
    

}