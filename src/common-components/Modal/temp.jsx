import React from 'react';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.name = "MyComponent";
    this.handleClick2 = this.handleClick1.bind(this);
  }

  handleClick1() {
    alert(this.name);
  }

  handleClick3 = () => {
    alert(this.name);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick1()}>Click 1</button>
        <button onClick={this.handleClick1}>Click 2</button>
        <button onClick={this.handleClick2()}>Click 3</button>
        <button onClick={this.handleClick3()}>Click 4</button>
      </div>
    );
  }
}