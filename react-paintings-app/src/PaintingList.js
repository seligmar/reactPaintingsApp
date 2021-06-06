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

  inputSearchTerm = e => {
    this.setState({ searchTerm: e })
    console.log(this.state.searchTerm)
  }

  filterPaintings = () => {
    var newPaintingList = this.state.allPaintings.filter(
      painting => !painting.title.includes(this.state.searchTerm)
    )
    this.setState({ allPaintings: newPaintingList })
  }

  render () {
    return (
      <div>
        <SearchBar filterPaintings={this.inputSearchTerm} />
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
