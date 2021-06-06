import React from 'react'
import PaintingCard from './PaintingCard'
import SearchBar from './SearchBar'

class PaintingList extends React.Component {
  state = {
    allPaintings: this.props.paintings,
    searchTerm: ''
  }

  removePainting = id => {
    var newPaintingList = this.state.allPaintings.filter(
      painting => painting.id !== id.target.id
    )
    this.setState({ allPaintings: newPaintingList })
  }

  inputSearchTerm = searchText => {
    this.setState({ searchTerm: searchText })
    this.filterPaintings()
  }

  filterPaintings = () => {
    var newPaintingList = this.state.allPaintings.filter(painting =>
      painting.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    )
    this.setState({ allPaintings: newPaintingList })
  }

  render () {
    return (
      <div>
        <SearchBar inputSearchTerm={this.inputSearchTerm} />
        <div className='grid-container'>
          {this.state.allPaintings.map(painting => (
            <PaintingCard
              key={painting.id}
              painting={painting}
              removePainting={this.removePainting}
            />
          ))}
        </div>
      </div>
    )
  }
}
export default PaintingList
