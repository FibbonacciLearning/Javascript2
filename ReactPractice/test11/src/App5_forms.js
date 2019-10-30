import React from "react"

class App4 extends React.Component{
    constructor(){
        super()
        this.state = {firstName: "", lastName: "", isFriendly : false}
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        const {name, value, type, checked} = e.target
        type === "checkbox" ? this.setState({[name] : checked}) : this.setState({[name] : value})
    }
    render(){
        return(
            <form>
                <label>
                    First name : 
                    <input name="firstName" value={this.state.firstName} onChange={this.handleChange}></input>
                </label>
                <br/><br/>
                <label>
                    Last name : 
                    <input name="lastName" value={this.state.lastName} onChange={this.handleChange}></input>
                </label>
                <br/><br/>
                <label>
                    Is Friendly?
                    <input type="checkbox" name="isFriendly" checked={this.state.isFriendly} onChange={this.handleChange}></input>
                </label>
                <br/><br/>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2>{this.state.isFriendly ? "He is friendly" : "He is not friendly"}</h2>


            </form>
        )
    }
}
export default App4