import React from 'react';
import dataService from './services/dataa'
const Maa = ({ maad }) => {
  return (
    <li>{maad.name}</li>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      maadata: [],
      maa: ''
    }
    console.log('Appi')

  }
/*lifecycle metodi siksi toimii!!!*/
  componentDidMount(){
    console.log('Dataa otettu sivuilta')
    dataService
    .getAll()
    .then(response=>{
      console.log('Dataa saatu responseen')
      this.setState({maadata: response})
    })
  }

  handleMaa = (event) => {
    console.log(event.target.value)
    this.setState({maa: event.target.value})
  }


  render() {
    return (
      <div>
        <h2>Tehtava 2.12-2.15</h2>
        <div>
          find countries:<input 
          value={this.state.maa}
          onChange={this.handleMaa}/>
        </div>
        <div>
          <FilterCountries 
            maadata={this.state.maadata}
            maa={this.state.maa}
            handleMaa={this.handleMaa}
          />
        </div>
      </div>
    )
  }
}

const FilterCountries = ({maadata, maa, handleMaa}) =>{
  /* includes = kirjainjoukko sisaltyy */
  const filteredCountries = 
    maadata.filter(maad => maad.name.toUpperCase().includes(maa.toUpperCase()))

  if (filteredCountries.length === 1){
    return(
      <div>
        <h2>{filteredCountries[0].name}</h2>
        <p>Asukasmaara: {filteredCountries[0].population}</p>
        <img src={filteredCountries[0].flag} height="100" width="100" alt="flag"/>
      </div>
    )
  }
  else if(filteredCountries.length < 10){
    return(
      <div>
        <ul>
          {filteredCountries.map(maad =>
            <li key={maad.name}>{maad.name}</li>
            )}
        </ul>
      </div>
    )
  }
  else{
    return(
      <div>
        <p>Liikaa maita :(</p>
      </div>
    )
  }
}

export default App