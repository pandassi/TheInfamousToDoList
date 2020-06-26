import React from "react";
import List from "./List.js";
import "./styles.css";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      tomorrowTasks: [],
      input: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    const List = event.target.value.toString();
    const itemsArray = List.split(/,\s/);
    const toDoList = itemsArray.map(item => {
      return {
        id: 1 + Math.random(),
        value: item
      };
    });
    this.setState({
      input: event.target.value,
      toDoList: toDoList
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.input
    };

    if (newItem.text !== "") {
      const toDoList = [...this.state.toDoList, newItem];
      this.setState({
        toDoList: toDoList,
        input: ""
      });
    }
  }

  handleDelete(key) {
    const filteredItems = this.state.toDoList.filter(item => item.id !== key);
    this.setState({
      toDoList: filteredItems
    });
  }
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Separate Tasks with Commas and Space"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <br />
          {/* <button onClick={this.handleSubmit}>Submit</button> */}
        </form>

        <List
          items={this.state.toDoList.filter(t => t.value.trim())}
          deleteItem={this.handleDelete}
        />

        <button
          type="submit"
          onClick={() => {
            const tomorrowTitle = <h2>Tomorrow:</h2>;
            const tomorrowTasks = this.state.toDoList.map(item => item.value);
            this.setState({
              tomorrowTasks: tomorrowTasks,
              tomorrowTitle: tomorrowTitle
            });
          }}
        >
          Or procrastinate
        </button>

        <div className="tomorrow">
          {this.state.tomorrowTitle}
          {this.state.tomorrowTasks.join(", ")}
        </div>
      </>
    );
  }
}
export default ToDo;
