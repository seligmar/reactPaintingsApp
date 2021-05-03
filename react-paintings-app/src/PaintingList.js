import React from 'react'
import PaintingCard from './PaintingCard'

const PaintingList = props => {
  return (
    <div className='grid-container'>
      {props.paintings.map(painting => (
        <PaintingCard key={painting.id} painting={painting} />
      ))}
    </div>
  )
}

export default PaintingList
