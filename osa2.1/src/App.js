import React from 'react';
import personService from './services/persons'
import Person from './components/person'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newNumber: '',
      newName: '',
      error: 'error'
    }
  }
  componentDidMount() {
    console.log('did mount')
    personService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ persons: response })
      })
  }
  handlePersonChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNumber: event.target.value })
  }

  addPerson = (event) => {
    event.preventDefault()

    const newName = this.state.newName
    var onkolisatty = false

    this.state.persons.forEach(function(item, index, array){
      if(item.name.toUpperCase() === newName.toUpperCase()){
        onkolisatty = true
      }
    })

    if(onkolisatty !== true){
    const personObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }
      personService
        .create(personObject)
        .then(response => {
        this.setState({
          persons: this.state.persons.concat(response.data),
          newName: '',
          newNumber: ''
        })
      })
    }
    else{
      this.setState({
        newName: '',
        newNumber: ''
      })
    }
  }  

  deletePerson = (person) => () => {

    if (window.confirm("Delete person?") === false) {
      return;
    }
    personService
    .deletePerson(person.id)
    .then(response=> {
      this.setState({
        persons: this.state.persons.filter(deleted => person.id !== deleted.id),
        newName: '',
        newNumber: ''
      })
    })
    .catch(error=> {
      this.setState({
        error: 'error'
      })
    })

  }
  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi: <input 
            value={this.state.newName}
            onChange={this.handlePersonChange}
            />
          </div>
          <div>
            numero: <input 
              value={this.state.newNumber}
              onChange={this.handleNumberChange}  
          />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <div>
          <ul>
            {this.state.persons.map(person =>
               <Person 
               key={person.id}
               person={person}
               deletePerson={this.deletePerson}
               />
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
