import React from 'react'


const Kurssi = ({kurssi}) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return (  
      <div>    
        <ul>
          <h1>{kurssi.nimi}</h1>
          {kurssi.osat.map(osa =><li key={osa.id}>{osa.nimi}</li>)}
          <li>yhteensa: {kurssi.osat.map(tehtavia => tehtavia.tehtavia).reduce(reducer)}</li>
        </ul>
      </div>    
    )
  }

const Kurssit = ({kurssit}) => {
  const result = kurssit.map(note=> note.nimi)
  console.log(result)

    return (
      <div>
          {kurssit.map(kurssi=> <Kurssi key={kurssi.id} kurssi={kurssi}/>)}  
      </div>
    )
  }

export default Kurssit