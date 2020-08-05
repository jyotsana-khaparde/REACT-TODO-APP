import React, {Component} from 'react';
import './App.css';
import TodoItem from './component/todoItem';
import todoData from './jsonFiles/todoData'
import { render } from '@testing-library/react';
/**
 * In jsx we use className instead of class reason :-
 *  1. people say class is a reserverd key word in javascript
 *  2. jsx just using the vanilla javascript DOM API
 *  3. document.getElementById('sometging').className + "new-class-name"
 *  4. className is a underline javascript DOM API
 */
class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todoData,
      isLoading: true
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (id) => {
    console.log("changed", id);
    const updatedState = this.state.todos.map(item => {
      if (item.id === id) {
          item.completed = !item.completed
        }
        return item;
    })
    this.setState({
        todos: updatedState
    })
    console.log('updatedState----', updatedState);
  }

  componentDidMount() {
    setTimeout(() =>{
      this.setState({
        isLoading: false
      })
    }, 1500)
  }

  render() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
      color: 'black'
    }

    if (hours < 12) {
      timeOfDay = 'Morning'
      styles.color = 'green'
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = 'Afternoon'
      styles.color = 'blue'
    } else {
      timeOfDay = 'Night'
      styles.color = 'orange'
    }

    const todoItemList = this.state.todos.map(item => <TodoItem key={item.id} todoItem={item} handleChange={this.handleChange}/>);
    return (
    <div className="todo-list">
      <h3 style={styles}>Hello, Good {timeOfDay} jyotsana This is your TODO list</h3>
      {this.state.isLoading ? 'Loading....' : todoItemList }
    </div>
  );
  };
}

export default App;
