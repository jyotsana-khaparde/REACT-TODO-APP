import React from 'react';
import './App.css'; 
/**
 * In jsx we use className instead of class reason :-
 *  1. people say class is a reserverd key word in javascript
 *  2. jsx just using the vanilla javascript DOM API
 *  3. document.getElementById('sometging').className + "new-class-name"
 *  4. className is a underline javascript DOM API
 */
function App() {
 const date = new Date()
 const hours = date.getHours()
 let timeOfDay
 const styles = {
   color: 'black'
 }

 if(hours < 12) {
   timeOfDay = 'Morning'
   styles.color = 'green'
 } else if(hours >= 12 && hours < 17){
   timeOfDay = 'Afternoon'
   styles.color = 'blue'
 } else {
   timeOfDay = 'Night'
   styles.color = 'orange'
 }

  return (
    <div className="App">
      <h3 style={styles}>Hello, Good {timeOfDay} jyotsana This is your TODO list</h3>

      <input type='checkbox'></input>
      <p>Placeholder text here</p>

      <input type='checkbox'></input>
      <p>Placeholder text here</p>

      <input type='checkbox'></input>
      <p>Placeholder text here</p>

      <input type='checkbox'></input>
      <p>Placeholder text here</p>
    </div>
  );
}

export default App;
