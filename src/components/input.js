import React from "react";
import ReactDOM from "react-dom";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }
  render() {
    return (
      <div class="todo-form-container">
        <form>
          <input type="text" placeholder="What need to be done?" />
        </form>
      </div>
    );
  }
}

export default Input;
