import React from "react";
import PlayingCardData from "./App2_PlayingCardData";
import PlayingCard from "./App2_PlayingCard";

function CardAggregation() {
    const FilteredList = PlayingCardData.filter(card => card.rank === "six" && card.suit === "diamonds")
    const CardComponents = FilteredList.map(card => <PlayingCard key = {Math.random()}  card = {card} />);
    return(
        <div>
            {CardComponents}
        </div>
    )
};

export default CardAggregation; 

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