import React from "react";

// class App1 extends React.Component{
//     render(){
//         const currentDate = new Date();
//         return <h1>{currentDate.getDate()} / {currentDate.getMonth()} / {currentDate.getFullYear()}</h1>
//     }
// };

// class App1 extends React.Component{
//     constructor(){
//         super()
//         this.State = {answer: 'yes sir', another: 'no sir'};
//     }
//     render(){
//         return <div>{this.State.answer} AND {this.State.another}</div> 
//     }
// }

class App1 extends React.Component{
    constructor(){
        super()
        this.state = {loggedInState: false};
    }
    render(){
        let displayWord;
        if(this.state.loggedInState === true){displayWord = 'In'}else{displayWord = 'Out'}
        return (
        <div>
            <h1>You are currently logged {displayWord}?</h1>
        </div>
        )
    }
}

export default App1