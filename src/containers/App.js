import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';


class App extends PureComponent {
  constructor(props){
    super(props);
    console.log('[App.js] Inside constructor', props);
    this.state = {
      persons: [
        { id: '000', name: 'Aries', age: 29},
        { id: '001', name: 'Leo', age: 50},
        { id: '002', name: 'Puppy', age: 4}
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClicked: 0
    };
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount')
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(){
  console.log('[UPDATE App.js] Inside componentDidUpdate');
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
    this.setState( (prevState, props) => {
      return {
      showPersons: !doesShow, 
      toggleClicked: prevState.toggleClicked + 1 
      }
    });
  }
  
  render() {
    console.log('[App.js] Inside render()');
    let persons = null;
    
    if (this.state.showPersons) {
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}/>;
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}} >Show Persons</button>
        <Cockpit 
          showPersons={this.state.showPersons} 
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}/>
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);