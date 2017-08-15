import React, { Component } from 'react';

class TodoContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : "this.props.content"
    }
    console.log(this.state.value);
  }
  _onContentEdit(e) {
    this.setState({ value : e.target.value });
  }
  render() {
    return (
      <section id="todo_content">
        <textarea spellCheck="false" value={this.state.value} 
          onChange={this._onContentEdit.bind(this)} />
          <p>{this.props.content}</p>
      </section>
    );
  }
}

export default TodoContent;