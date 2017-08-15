import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /*showContentId : null,
      deleteItemId : null*/
    }
  }

  _showThisContent() {
    this.props.showThisContent(this.props.todoItem);
  }

  deleteItemById() {
    /*
    this.setState({ deleteItemId: this.props.todoItem.id }, function () {
      console.log("deleteItemById() fired: " + this.state.deleteItemId);
    })
    */
  }
  
  render() {
    return (
      <div className="todo_item" onClick={this._showThisContent.bind(this)}>
        <h2>{this.props.todoItem.title}</h2>
        <div className="del_item" ><p>X</p></div>
      </div>
    );
  }
}

export default TodoItem;