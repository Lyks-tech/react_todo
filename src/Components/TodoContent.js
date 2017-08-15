import React, { Component } from 'react';

class TodoContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : this.props.content
    }
  }

  componentWillReceiveProps(nextProp) {
    if (typeof nextProp !== 'undefined')
      this.setState({ value : nextProp.content });
  }

  render() {
    return (
      <section id="todo_content">
        <textarea spellCheck="false" value={this.state.value} 
         onChange={e => this.setState({ value : e.target.value })} />
      </section>
    );
  }
}

export default TodoContent;