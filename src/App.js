import React, {Component} from 'react';
import './App.css';
import TodoItem from './component/todoItem';
import todoData from './jsonFiles/todoData'
import LogInForm from './component/logInForm';
/**
 * In jsx we use className instead of class reason :-
 *  1. people say class is a reserverd key word in javascript
 *  2. className is a underline javascript DOM API and jsx just using the vanilla javascript DOM API
 *  ex in vanilla javascript -> document.getElementById('sometging').className + "new-class-name"
 */
class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todoData,
      isLoading: true,
      IsFormOpen: false
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

  handleSignIn = () => {
    console.log('sign in');
    this.setState({
      IsFormOpen: true
    })
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
      <button onClick={this.handleSignIn}>Log In</button>
      {this.state.IsFormOpen ? (<LogInForm/>) :  this.state.isLoading ? 'Loading....' : todoItemList }
    </div>
  );
  };
}

export default App;
