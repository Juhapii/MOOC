import React from 'react'
import ReactDOM from 'react-dom'


const Otsikko = (props) => {
    return (
      <div>
        {props.kurssi}
      </div>
    )
  }

  const Osa1 = (props) => {
    return (
      <div>
        {props.osat[0].nimi} {props.osat[0].tehtavia}
      </div>
    )
  }

  const Osa2 = (props) => {
    return (
      <div>
        {props.osat[1].nimi} {props.osat[1].tehtavia}
      </div>
    )
  }

  const Osa3 = (props) => {
    return (
      <div>
        {props.osat[2].nimi} {props.osat[2].tehtavia}
      </div>
    )
  }
  const Sisalto = (props) => {
    return (
      <div>
        <Osa1 osat={props.osat}/>
        <Osa2 osat={props.osat}/>
        <Osa3 osat={props.osat}/>
      </div>
    )
  }

  const Yhteensa = (props) => {
    return (
      <div>
        yhteensä {props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia} tehtävää
      </div>
    )
  }

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
          {
            nimi: 'Reactin perusteet',
            tehtavia: 10
          },
          {
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7
          },
          {
            nimi: 'Komponenttien tila',
            tehtavia: 14
          }
        ]
      }

  return (
    <div>
      <h1><Otsikko kurssi={kurssi.nimi} /></h1>
      <p><Sisalto osat={kurssi.osat}/></p>
      <p><Yhteensa osat={kurssi.osat}/></p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)