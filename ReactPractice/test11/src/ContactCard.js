import React from "react";
import CardData from "./CardData";
import Card from "./Card";

function ContactCard() {
    const CardComponents = CardData.map(card => <Card key = {card.id}  card = {card} />);
    return(
        <div>
            {CardComponents}
        </div>
    )
};

export default ContactCard; 

// function ContactCard(props){
//     console.log(props);
//     return(
//         <div>
//             <h3>{props.contact.name}</h3>
//             <div>Email : {props.contact.email}</div>
//             <div>Phone : {props.contact.phone || "Phone number not provided"}</div>
//         </div>
//     )
// }