import FunctionComponent from "./components/functioncomponent"
import ClassComponent from "./components/classcomponent"
import Navbar from "./components/navbar"
import Effect from "./components/useeffect"
import Context from "./components/context"
import Contextu from "./components/create&useconext"
import UseRef from "./components/useRef"
import UseRefcom from "./components/userefcomp"
export default function App(){
    return(
        <div>
            <h1>i am a component</h1>
            <hr/>
            <FunctionComponent/>
            <hr/>
            <ClassComponent/>
            <hr/>
            <Navbar/>
            <hr/>
            <Effect/>
            <hr/>
            <Context/>
            <hr/>
            <Contextu/>
            <hr/>
            <UseRef/>
            <hr/>
            <UseRefcom/>
        </div>
    )
}