import react from "react"
class ClassComponent extends react.Component{
 constructor(){
    super();
    this.state={"count":0};
    this.handleDecrement=this.handleDecrement.bind(this)
    this.handleIncrement=this.handleIncrement.bind(this)

}
handleIncrement(){
    this.setState({count:this.state.count+1});
}
handleDecrement()
{
    this.setState({count:this.state.count-1});
}
render(){
    return(
        <div>
            <h2>I am classComponent</h2>
            <h3>statevalue:{this.state.count}</h3>
            <button onClick={this.handleIncrement}>Increment</button>
            <button onClick={this.handleDecrement}>Increment</button>

        </div>
    )
}
}
export default ClassComponent;