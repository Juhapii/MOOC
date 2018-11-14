import React from 'react'
import deletePerson from '../services/persons'
/*import deletePerson from '../App'*/

const Person = ({ person, deletePerson }) => {
  return (
    <li>{person.name} {person.number} <button onClick={deletePerson(person)}>poista</button></li>
  )
}

export default Person