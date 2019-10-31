import React from "react";


function PlayingCard(props){
    //console.log(props);
    return(
        <div>
            <div>Suit : {props.card.suit}</div>
            <div>Rank : {props.card.rank}</div>
        </div>
    )
}

export default PlayingCard;