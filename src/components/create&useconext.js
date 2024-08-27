import{useState,createContext,useContext} from "react"
const contextpkg=createContext()
function Contextu(){
    const[course,setCourse]=useState("REACT")
    return(
        <contextpkg.Provider value={course}>
            <h1>{course}CourseStarted</h1>
            <Component2/>
            </contextpkg.Provider>
    )
}
function Component2(){
    const cr=useContext(contextpkg)
    return(
        <div>
            <h1>{cr}CourseEnded</h1>
        </div>
    )
}
export default Contextu