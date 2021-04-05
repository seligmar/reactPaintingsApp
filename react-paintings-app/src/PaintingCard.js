import React from 'react'

const PaintingCard = props => {
  console.log('props?', props)
  return (
    <div className='ui card'>
      <h2>{props.painting.title}</h2>
      <div className='image'>
        <img src={`${props.painting.image}`} />
      </div>
      <div className='content'>
        <a className='header'>{props.painting.artist.name}</a>
      </div>
    </div>
  )
}

export default PaintingCard
