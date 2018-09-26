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
    otherState: 'some other value',
    showPersons: false
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map(person => {
          return <Person 
          name={person.name} 
          age={person.age}/>
        })} 
        </div> 
      );
    }

    return (
      <div className="App">
       <h1>Hello, Leo!</h1>
       <p>This is really working!</p>

       <button 
       style={style}
       onClick={this.togglePersonsHandler}>Toggle Persons</button>

       {persons}

      </div>
       
    );
  }
}

export default App;