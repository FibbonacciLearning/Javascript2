import React from "react";
import "./index.css";
//Presentational component for presenting the value of prop 'id' passed from container component calling this component
class IPAddress extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.ip}</h1>
                <p>( This is your IP address...probably :P )</p>
            </div>
        );
    }
};

export default IPAddress;