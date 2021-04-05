import React from 'react'

const Navbar = props => {
  return (
    <div className={`ui inverted ${props.color} menu`}>
      <a className='item' />
      <h2 className='ui header'>
        <i className={`${props.icon} icon`} />
        <div className='content'>{props.title}</div>
        <div className='subheader'>{props.subtitle.toUpperCase()}</div>
      </h2>
    </div>
  )
}

export default Navbar
