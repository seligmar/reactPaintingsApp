import React from 'react'
import PaintingCard from './PaintingCard'

class PaintingList extends React.Component {
  state = {
    allPaintings: this.props.paintings
  }

  removePainting = e => {
    var newPaintingList = this.state.allPaintings.filter(
      painting => painting.id !== e.target.id
    )
    this.setState({ allPaintings: newPaintingList })
  }

  render () {
    return (
      <div className='grid-container'>
        {this.state.allPaintings.map(painting => (
          <PaintingCard
            key={painting.id}
            painting={painting}
            removePainting={this.removePainting}
          />
        ))}
      </div>
    )
  }
}
export default PaintingList
