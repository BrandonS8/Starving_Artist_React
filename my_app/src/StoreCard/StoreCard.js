import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './StoreCard.css'
class StoreCard extends Component {
  constructor () {
    super()

    this.state = {
      color: ''
    }
  }

  componentDidMount () {
    let colors = [
      '#D62686',
      '#1587CD',
      '#F8B92B',
      '#2C9F92',
      '#D25E48',
      '#D25D48'
    ]

    let color = Math.floor(Math.random() * (colors.length - 0) + 0)
    // set the style of the h1 to style=this.state.color using math.random and setState to color
    this.setState({
      color: colors[color]
    })
  }

  render () {
    return (
      <div className='storeCard pulse animated'>
        <Link to={'/' + this.props.id}>
          <h1
            className='storeCardName'
            style={{ background: this.state.color }}
          >
            {this.props.name}
          </h1>
          <img
            src={this.props.image}
            className='storeCardImage'
            alt={'product from ' + this.props.name}
          />
        </Link>
      </div>
    )
  }
}

export default StoreCard
