import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state={
      todoList:[]
    }
  }
componentDidMount(){
  axios.get('/api/todo').then((res)=>this.setState({todoList:res.data}))
}
  
  render() {
    console.log(this.state)
    const mappedTodos = this.state.todoList.map((todo,i)=> <h1 key={todo.id}>{todo.title}</h1>)
    return (
      <div className="App">
        <header className="App-header">
          <div>{mappedTodos}</div>
        </header>
      </div>
    );
  }
}

export default App;
