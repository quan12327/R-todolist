import React from "react";
import ReactDOM from "react-dom";

class Sort extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 3,
    };
  }

  render() {
    return (
      <div class="todo-footer-container">
        <div class="todo-count">{this.state.count} items left</div>
        <div class="todo-menus">
          <span class="active">All</span>
          <span>Active</span>
          <span>Complete</span>
        </div>
      </div>
    );
  }
}

export default Sort;
