import React, { Component } from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {
  _showThisContent(todoItem) {
    this.props.showThisContent(todoItem);
  }

  render() {
    let todoItems;

    if (this.props.todoList) {
      todoItems = this.props.todoList.map(item => {
        return (
          <TodoItem key={item.id} todoItem={item} 
            showThisContent={this._showThisContent.bind(this)} />
        );
      })
    }
    return (
      <section id="main_list">
        {todoItems}
      </section>
    );
  }
}

export default TodoList;