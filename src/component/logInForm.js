import React, {Component} from 'react'

class LogInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            isFriendly: false,
            gender: '',
            favColor: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
  	console.log('event-->', event)
    const {name, value, type, checked} = event.target
    type === 'checkbox' ? this.setState({[name]: checked}) :
    this.setState({
        // [event.target.name]: event.target.value
        [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <label>
          First Name:
          <input
            type="text"
            value={this.state.firstName}
            name='firstName'
            placeholder='First Name'
            onChange={this.handleChange} />
        </label><br/>
        <label>
          Last Name:
          <input
            type="text"
            value={this.state.lastName} 
            name='lastName'
            placeholder='Last Name'
            onChange={this.handleChange} />
        </label><br/>
        <textarea value='Some default value' onChange={this.handleChange} /><br/>
        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange} />
        </label> Is friendly ? <br/>

        <label>
          <input
            type="radio"
            name="gender"
            value='male'
            checked={this.state.gender === 'male'}
            onChange={this.handleChange} />
        </label> Male <br/>

        <label>
          <input
            type="radio"
            name="gender"
            value='female'
            checked={this.state.gender === 'female'}
            onChange={this.handleChange} />
        </label> Female <br/>
        {/* Formik */}
        <select value={this.state.favColor} name='favColor' onChange={this.handleChange}>
            <option value='pink'>Pink</option >
            <option value='black'>Black</option >
            <option value='white'>White</option >
            <option value='blue'>Blue</option >
        </select>
        <h3>You are a {this.state.gender}</h3>
        <h3>your fav color is {this.state.favColor}</h3>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default LogInForm;