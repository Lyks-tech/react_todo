import React, { Component } from 'react';
import './App.css';

import Axios from 'axios';

import TodoList from './Components/TodoList';
import TodoContent from './Components/TodoContent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      contentToShow: ""
    }
  }

  getTodoList() {
    Axios.get('https://serene-crag-55111.herokuapp.com/api/todo-items/')
      .then(response => {
        this.setState({ todoList : response.data, contentToShow: response.data[0].content }, function () {
          console.log("App.js getTodoList() setState default content: " + this.state.todoList[0].content);
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  _showThisContent(todoItem) {
    console.log("App.js _showThisContent() fired");
    this.setState({ contentToShow : todoItem.content });
  }

  componentWillMount() {
    this.getTodoList();
  }
  
  render() {
    if (this.state.todoList[0])
    {
      return (
        <div className="App">
          <nav>
            <h2>A collaborative ToDo App</h2>
          </nav>
          <container>
            <TodoList todoList={this.state.todoList}
              showThisContent={this._showThisContent.bind(this)} />
            <TodoContent content={this.state.contentToShow} />
          </container>
        </div>
      );
    }
    else return ( <p>LOADING DATA</p> );
  }
}

export default App;
