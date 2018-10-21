import React from 'react';
import ReactDOM from 'react-dom';

const Statistics = (props) => {
    return(      
        <div>
        <p>hyva {props.state.hyva}</p>
        <p>neutraali {props.state.neutraali}</p>
        <p>huono {props.state.huono}</p>
        </div>
        )
  }

  const Statistic = (props) => {
    return (
        <div>
        <p>positiivisia {props.state.hyva / props.state.yhteensa *100} %</p>
        <p>keskiarvo {(props.state.hyva - props.state.huono) / props.state.yhteensa}</p>
        </div>
     
    )
  }
  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        hyva: 0,
        neutraali: 0,
        huono:0,
        yhteensa: 0
      }
    }
  
    asetaHyvat = (arvo) => {
      return () => {
        this.setState({ hyva: arvo })
        this.setState({ yhteensa: this.state.yhteensa + 1 })
      }
    }
    asetaNeutraalit = (arvo) => {
        return () => {
          this.setState({ neutraali: arvo })
          this.setState({ yhteensa: this.state.yhteensa + 1 })
        }
      }
    asetaHuonot = (arvo) => {
        return () => {
            this.setState({ huono: arvo })
            this.setState({ yhteensa: this.state.yhteensa + 1 })
        }
    }

    render() {
      return (
        <div>
          <div>
            <h1>anna palautetta</h1>    
          </div>
          <div>
            <Button
                handleClick={this.asetaHyvat(this.state.hyva + 1)}
                text="Hyva"
            />
            <Button
                handleClick={this.asetaNeutraalit(this.state.neutraali + 1)}
                text="Neutraali"
                />
            <Button
                handleClick={this.asetaHuonot(this.state.huono + 1)}
                text="Huono"
            />
          </div>
          <div>
            <h1>statistiikka</h1>    
          </div>
          <div>   
            {this.state.yhteensa != 0 ? <Statistics state={this.state}/> : 'ei palautetta'}
            {this.state.yhteensa != 0 ? <Statistic state={this.state}/> : ''}
          </div>

        </div>
      )
    }
  }
    ReactDOM.render(
      <App />,
      document.getElementById('root')
    )  