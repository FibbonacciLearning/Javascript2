import React from "react"


function Card(props){
    //console.log(props);
    return(
        <div>
            <h3>{props.card.name || "No name provided"}</h3>
            <div>Email : {props.card.email || "No email provided"}</div>
            <div>Phone : {props.card.phone || "Phone number not provided"}</div>
        </div>
    )
}

export default Card;