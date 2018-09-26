import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Aries', age: 29},
      {name: 'Leo', age: 50},
      {name: 'Puppy', age: 5}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    //console.log('I was clicked!');
    // DON'T DO THIS:  this.state.persons[0].name = 'Irasema';
    this.setState({ 
      persons: [
      {name: newName, age: 29},
      {name: 'Leo', age: 50},
      {name: 'Puppy', age: 6}
    ] })
  }


  nameChangeHandler = (event) => {
    this.setState({ 
      persons: [
      {name: event.target.value, age: 29},
      {name: 'Leo', age: 50},
      {name: 'Puppy', age: 6}
    ] })
  }
  

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };


    return (
      <div className="App">
       <h1>Hello, Leo!</h1>
       <p>This is really working!</p>

       <button 
       style={style}
       onClick={() => this.switchNameHandler('Irasema')}>Switch Name</button>

      <div>
      <Person 
       name={this.state.persons[0].name} 
       age={this.state.persons[0].age}
       click={this.switchNameHandler.bind(this, 'Semita')}
       changed={this.nameChangeHandler}
       >Hobbies: React</Person>

       <Person 
       name={this.state.persons[1].name} 
       age={this.state.persons[1].age}/>

       <Person 
       name={this.state.persons[2].name} 
       age={this.state.persons[2].age}/>
      </div>
      </div>


       
    );
  }
}

export default App;