import React from 'react'

const SearchBar = props => {
  return (
    <div className='ui action input'>
      <input
        type='text'
        placeholder='Search'
        onChange={props.inputSearchTerm}
      />
      <button className='ui icon button'>
        <i className='search icon' />
      </button>
    </div>
  )
}

export default SearchBar
