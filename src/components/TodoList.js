import React from 'react';
import { connect } from 'react-redux';

import { addTodo, deleteTodo, toggleCompleted } from '../actions/actions';

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addTodo = e => {
    e.preventDefault();
    const length = this.props.todoList.length + 1;
    const newTodo = {
      value: this.state.value,
      completed: false,
      id: length
    }
    this.setState({
      value: ''
    })
    this.props.addTodo(newTodo);
  }

  toggleCompleted = (id) => {
    const index = id - 1;
    this.props.toggleCompleted(index);
    this.forceUpdate();
  }

  deleteTodo = (id) => {
    this.props.deleteTodo(id);
  }


  render() {
    return (
      <div className="list-wrapper">
        <h1>To do List</h1>
        <ul>
          {this.props.todoList.map(e => <li key={e.id}>{e.value}: {e.completed ? 'complete' : 'incomplete'}
            <button onClick={() => this.toggleCompleted(e.id)}>complete?</button>
            <button onClick={() => this.deleteTodo(e.id)}>x</button>
          </li>)}
        </ul>
        <div>
          <input
            placeholder="add to do"
            value={this.state.value}
            onChange={this.handleChange}
            type="text"
            name="value"
          ></input>
          <button onClick={this.addTodo}>update</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList
  };
};

export default connect(mapStateToProps, { addTodo, toggleCompleted, deleteTodo })(TodoList)