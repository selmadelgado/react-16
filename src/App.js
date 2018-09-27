import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '000', name: 'Aries', age: 29},
      { id: '001', name: 'Leo', age: 50},
      { id: '002', name: 'Puppy', age: 4}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangeHandler = (event) => {
    this.setState({ 
      persons: [
      {name: event.target.value, age: 29},
      {name: 'Leo', age: 50},
      {name: 'Puppy', age: 5}
    ] })
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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
        {this.state.persons.map((person, index) => {
          return <Person 
          click={() => this.deletePersonHandler(index)}
          name={person.name} 
          age={person.age}
          key={person.id}/>
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