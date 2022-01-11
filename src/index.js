import React from "react";
import ReactDOM from "react-dom";
import List from "./components/list.js";
import Input from "./components/input.js";
import Sort from "./components/sort.js";
class Root extends React.Component {
  render() {
    return (
      <>
        <div class="app-container">
          <h3 class="header">
            <span class="header__title">My Todos</span>
          </h3>

          <div class="todo-container">
            <Input />
            <Sort />
            <div class="todo-list-container">
              <div class="todo-item-container">
                <span class="todo-item-toggle">
                  <img src="assets/complete-tick.svg" alt="tick" />
                </span>
                <div class="todo-item-content completed">Ăn bánh mì</div>
                <div class="todo-item-options">
                  <span class="icon-btn">
                    <img src="assets/edit.svg" alt="edit" />
                  </span>
                  <span class="icon-btn">
                    <img src="assets/delete.svg" alt="close" />
                  </span>
                </div>
              </div>
              <List name="Uống một tách trà nóng" />
              <List name="Đến Academy học lập trình" />
              <List name="Ăn trưa cùng crush" />
              <List name="Thực hành lập trình" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<Root />, document.querySelector("#root"));
