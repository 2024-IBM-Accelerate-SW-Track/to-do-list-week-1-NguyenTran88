import React, { Component } from "react";
import AddTodo from "../component/AddTodo";
import Todos from "../component/todos";
import myHome from "./Home.css";



class Home extends Component {
  // A default state of this component with an empty list of todos.
  constructor() {
    super();
    this.state = {
      // create your empty list here call it todos.
      todos: [], //check this shit lol, why not let todos = []
    };
  }
  // the addTodo function simply creates a new array that includes the user submitted todo item and then
  // updates the state with the new list.
  addTodo = (todo) => {
    // In React, keys or ids in a list help identify which items have changed, been added or removed. Keys
    // should not share duplicate values.
    // To avoid having dup values, we use the Math.random() function to generate a random value for a todo id.
    // This solution works for a small application but a more complex hashing function should be used when
    // dealing with a larger data sensitive project.
    todo.id = Math.random();
    // An array that contains the current array and the new todo item
    let new_list = [...this.state.todos, todo];
    // Updates the local state with the new array.
    this.setState({
      todos: new_list,
    });
  };
  render() {
    return (
      <div className="Home">
        <h1>Todo's </h1>
        <Todos todos={this.state.todos} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
    //idea: we get raw input data from addTodos => we create a list with id and shit in our states called todos
    //now pass that javscript todos list to the componenet Todos that makes actual html graphic to-do-items.

    //on the home page, we have the current todos,  handled by todos above
    //then we have input field and submit button for new todos, which is created by addtodo
    //within addtodos => it calls our very own adddtodos function in homes to process the input
    //into a javscript list. we have to feed this.addTodo into the addtodo componenet becasue that is how it ?
  }
}

export default Home;
