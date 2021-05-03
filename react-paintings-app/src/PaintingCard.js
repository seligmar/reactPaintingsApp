import React from 'react'

const PaintingCard = props => {
  return (
    <div className='ui card'>
      <h2>{props.painting.title}</h2>
      <div className='image'>
        <img src={`${props.painting.image}`} alt={props.painting.title} />
      </div>
      <div className='content'>
        <a className='header'>{props.painting.artist.name}</a>
        <a>
          <div>{props.painting.votes} &hearts;</div>
        </a>
      </div>
    </div>
  )
}

export default PaintingCard
