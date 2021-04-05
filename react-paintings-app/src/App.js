import React from 'react'
import ReactDom from 'react-dom'
import 'semantic-ui-css/semantic.min.css'

import './App.css'
import Navbar from './Navbar'

function App () {
  return (
    <div className='App'>
      <Navbar
        color='red'
        icon='react'
        title='My painting App'
        subtitle="Gotta Catch 'em All"
      />
    </div>
  )
}

export default App
