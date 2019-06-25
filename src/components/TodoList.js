import React from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleCompleted } from '../actions/actions';

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

  toggleCompleted = e => {
    e.preventDefault();
    this.props.toggleCompleted(this.props.index)
  }


  render() {
    return (
      <div className="list-wrapper">
        <h1>To do List</h1>
        <ul>
          {this.props.todoList.map(e => <li key={e.id}>{e.value}: {e.completed ? 'complete' : 'incomplete'}<button onClick={() => this.toggleCompleted}>complete?</button></li>)}
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

export default connect(mapStateToProps, { addTodo, toggleCompleted })(TodoList)