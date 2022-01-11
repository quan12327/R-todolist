import React from "react";
import ReactDOM from "react-dom";

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  render() {
    return (
      <div class="todo-item-container" onClick={() => this.handleTickClick()}>
        <span class="todo-item-toggle">
          <img src="assets/active-tick.svg" alt="tick" />
        </span>
        <div class="todo-item-content">{this.props.name}</div>
        <div class="todo-item-options">
          <span class="icon-btn">
            <img src="assets/edit.svg" alt="edit" />
          </span>
          <span class="icon-btn">
            <img src="assets/delete.svg" alt="close" />
          </span>
        </div>
      </div>
    );
  }
}

export default List;
