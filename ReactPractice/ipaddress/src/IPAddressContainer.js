import React from "react";
import ReactDOM from "react-dom";
import IPAddress from "./IPAddress.js";

var destination = document.querySelector("#container");
var xhr;
//Container component which calls presentation component IPAddress

class IPAddressContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ip_address: "..."
        };

        this.processRequest = this.processRequest.bind(this);
    }

    componentDidMount() {
        xhr = new XMLHttpRequest();
        xhr.open('GET', "https://ipinfo.io/json?token=2277ce4bac0347", true); //token=2277ce4bac0347 is the free security token, without which you will return 429 i.e. too many requests from ipinfo
        xhr.send();

        xhr.addEventListener("readystatechange", this.processRequest, true);
    }

    processRequest() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);

            this.setState({
                ip_address: response.ip
            });
        }
    }
    
    render() {
        return (
            <IPAddress ip={this.state.ip_address}/>
        );
    }
};

ReactDOM.render(
    <div>
        <IPAddressContainer/>
    </div>,
    destination
);

export default IPAddressContainer;
