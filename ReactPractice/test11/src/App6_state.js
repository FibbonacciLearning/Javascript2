import React from "react";
import './style.css';

// class App6_state extends React.Component{
//     render(){
//         const currentDate = new Date();
//         return <h1>{currentDate.getDate()} / {currentDate.getMonth()} / {currentDate.getFullYear()}</h1>
//     }
// };

// class App6_state extends React.Component{
//     constructor(){
//         super()
//         this.State = {answer: 'yes sir', another: 'no sir'};
//     }
//     render(){
//         return <div>{this.State.answer} AND {this.State.another}</div> 
//     }
// }

class StateDisplay extends React.Component{
    constructor(){
        super()
        this.state = {loggedInState: true};
    }
    render(){
        let displayWord;
        if(this.state.loggedInState === true){displayWord = 'In'}else{displayWord = 'Out'}
        return (
        <div>
            <h1>You are currently logged <p>{displayWord}</p></h1>
        </div>
        )
    }
}

export default StateDisplay