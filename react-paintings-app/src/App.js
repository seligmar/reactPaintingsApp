import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import Navbar from './Navbar'
import allPaintings from './data/data'
import PaintingList from './PaintingList'

function App () {
  return (
    <div className='App'>
      <Navbar
        color='blue'
        icon='react'
        title='My painting App'
        subtitle="Gotta Catch 'em All"
      />
      <PaintingList paintings={allPaintings} />
    </div>
  )
}

export default App
