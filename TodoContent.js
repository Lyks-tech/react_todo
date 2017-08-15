import React, { Component } from 'react';

class TodoContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : ""
    }
  }

  _onContentEdit(e) {
    this.setState({ value : e.target.value }, function () {
      console.log("_onContentEdit() setState value: " + this.state.value);
    });
  }

  _def() {
    if (this.state.value !== "")
    {
      console.log("_def() returning this.state.value: " + this.state.value);
      return (this.state.value);
    }
    return (this.props.content);
  }
  render() {
    return (
      <section id="todo_content">
        <textarea spellCheck="false" value={this._def()} 
          onChange={this._onContentEdit.bind(this)} />
      </section>
    );
  }
}

export default TodoContent;