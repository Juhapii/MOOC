import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'

axios.get('https://restcountries.eu/rest/v2/all').then(response => {
    const maadata = response.data
ReactDOM.render(
    <App maadata={maadata} />,
    document.getElementById('root')
  )
})