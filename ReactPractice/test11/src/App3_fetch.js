import React from "react";

class App3 extends React.Component{
    constructor(){
        super()
        this.state = {
            loading : false,
            name : {}
        }
    }

componentDidMount(){
    this.setState({loading : true})
    
    fetch("https://swapi.co/api/species/2/")
        .then(response => response.json())
        .then(data => this.setState({name : data, loading : false}))
    }

    render(){
        let DisplayText = this.state.loading ? "Loading..." : this.state.name.name
        return(
        <div>
            {DisplayText}
        </div>
        )}
}

export default App3