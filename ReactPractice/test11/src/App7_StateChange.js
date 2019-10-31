import React from "react"

class StateChange extends React.Component{
    constructor(){
        super()
        this.state = {count: 0};
        this.handleClick = this.handleClick.bind(this);
        this.doubleTheNumber = this.doubleTheNumber.bind(this);
    };

    handleClick(){
        this.setState(previousState =>{
            return {count: previousState.count + 1}
        })
    };

    doubleTheNumber(){
        this.setState(previousState =>{
            return({count: previousState.count*2})
        })
    };

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Submit</button>
                <button onClick={this.doubleTheNumber}>Double</button>
            </div>
        )
    };

}
export default StateChange