import React from "react"

class App4 extends React.Component{
    constructor(props){
        super(props)
        this.state = {value : ""}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({value : event.target.value.toUpperCase()})
    }

    handleSubmit(event){
        console.log('a name was submitted.  ' + this.state.value)
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name: 
                    <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                </label>
                <input type="submit" value = "SUBMIT"></input>
                <br/>
                <br/>
                <label>
                    Essay:
                    <textarea value= {this.state.value} onChange={this.handleChange}></textarea>
                </label>
                <br/><br/>
                <label>
                    List:   
                    <select multiple={false} value= {this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <br/><br/>
                <input type = "file"></input>
            </form>
        )}
}

export default App4