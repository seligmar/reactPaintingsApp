import React from 'react'

const SearchBar = props => {
  return (
    <div className='ui action input' style={{ marginLeft: '75%' }}>
      <input
        type='text'
        placeholder='Search'
        onChange={e => {
          props.inputSearchTerm(e.target.value)
        }}
      />
      <button className='ui icon button'>
        <i className='search icon' />
      </button>
    </div>
  )
}

export default SearchBar
