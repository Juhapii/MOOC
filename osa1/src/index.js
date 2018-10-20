import React from 'react'
import ReactDOM from 'react-dom'


const Otsikko = (props) => {
    return (
      <div>
        <p>{props.kurssi}</p>
      </div>
    )
  }

  const Osa1 = (props) => {
    return (
      <div>
        <p>{props.osa1} {props.tehtavia1}</p>
      </div>
    )
  }

  const Osa2 = (props) => {
    return (
      <div>
        <p>{props.osa2} {props.tehtavia2}</p>
      </div>
    )
  }

  const Osa3 = (props) => {
    return (
      <div>
        <p>{props.osa3} {props.tehtavia3}</p>
      </div>
    )
  }
  const Sisalto = (props) => {
    return (
      <div>
        <p><Osa1 osa1={props.osa1} tehtavia1={props.tehtavia1} /></p>
        <p><Osa2 osa2={props.osa2} tehtavia2={props.tehtavia2} /></p>
        <p><Osa3 osa3={props.osa3} tehtavia3={props.tehtavia3} /></p>
      </div>
    )
  }

  const Yhteensa = (props) => {
    return (
      <div>
        <p>yhteensä {props.tehtavia1 + props.tehtavia2 + props.tehtavia3} tehtävää</p>
      </div>
    )
  }

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
      <h1><Otsikko kurssi={kurssi} /></h1>
      <p><Sisalto osa1={osa1} tehtavia1={tehtavia1} osa2={osa2} tehtavia2={tehtavia2} osa3={osa3} tehtavia3={tehtavia3}/></p>
      <p><Yhteensa tehtavia1={tehtavia1} tehtavia2={tehtavia2} tehtavia3={tehtavia3} /></p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)