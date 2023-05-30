import React, { useState } from "react";
import "./App"


function Counter(props) {

    const [count, setCount] = useState(props.count);
    const [meuEstado, setMeuEstado] = useState("somou mais um")

    function add() {
        setCount(count + 1)
        console.log(meuEstado);
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={add}>Add</button>
        </div>
    )

}

/* class Counter extends React.Component{

    constructor(props){
        super(props)

        this.state = {count: this.props.count}
        this.add = this.add.bind(this);
    }

    add(){
       // this.setState({count: this.state.count + 1})
        this.setState((state)=>{return {count: state.count + 1}},()=>{
            // localStorage.setItem("state", JSON.stringify(this.state))
        })
    }

    // componentDidMount(){
    //    this.setState(JSON.parse(localStorage.getItem("state")))
    // }

    shouldComponentUpdate(){
        return true
    }

    render(){
        return(
        <div>
            <h1>Counter: {this.state.count}</h1>
            <button onClick={this.add}>Add</button>
        </div>
        )
    }
} */

export default Counter;