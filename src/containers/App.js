import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';

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

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  
  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}/>
        </div> 
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if(this.state.persons.length <= 2) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if(this.state.persons.length <= 1) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }
    

    return (
        <div className={classes.App}>
        <h1>Hello, Leo!</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>

        <button
        className={btnClass}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {persons}

        </div>
    );
  }
}

export default App;