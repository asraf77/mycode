import{useState}from"react"
function Context(){
    const[course,setCourse]=useState("REACT")
    return(
        <div>
            <h1>{course}CourseStarted</h1>
            <Component2 data={course}/>
        </div>
    )
}
function Component2(props){
    return(
        <div>
            <h1>component2</h1>
            <Component3 data={props.data}/>
        </div>
    )
}
function Component3(props){
    return(
        <div>
            <h1>component3</h1>
            <Component4 data={props.data}/>
        </div>
    )
}
function Component4(props){
    return(
        <div>
            <h2>{props.data}CourseEnded</h2>

        </div>
    )
}
export default Context