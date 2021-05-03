import React from 'react'

class PaintingCard extends React.Component {
  state = {
    likes: this.props.painting.votes
  }

  addLikes = () => {
    this.setState({ likes: this.state.likes + 1 })
  }

  render () {
    return (
      <div className='ui card'>
        <h2>{this.props.painting.title}</h2>
        <div className='image'>
          <img
            src={`${this.props.painting.image}`}
            alt={this.props.painting.title}
          />
        </div>
        <div className='content'>
          <a className='header'>{this.props.painting.artist.name}</a>
          <a>
            <div onClick={this.addLikes}>{this.state.likes} Likes &hearts;</div>
          </a>
          <i
            id={this.props.painting.id}
            onClick={this.props.removePainting}
            className='trash icon'
          ></i>
        </div>
      </div>
    )
  }
}
export default PaintingCard
