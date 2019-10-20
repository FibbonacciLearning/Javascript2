import React from 'react';
import TodoItem from "./TodoItem";
import TodoData from "./TodoData";
import './App.css';

// class App extends React.Component{
//   render(){
//     const TodoItems = TodoData.map(obj => <TodoItem key = {Math.random()} obj = {obj} />)
//     return(
//       <div className="todo-list">
//         {TodoItems}
//       </div>
//     );
//   }
// }


class App extends React.Component{
  constructor(){
    super()
    this.state = {todos : TodoData}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    //console.log("changed it", id)
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo =>{
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })
      return updatedTodos;
    })
  };


  render(){
    const TodoItems = this.state.todos.map(obj => <TodoItem key = {obj.id} obj = {obj} handleChange={this.handleChange} />)
    return(
      <div className="todo-list">
        {TodoItems}
      </div>
    );
  }
}



export default App;
