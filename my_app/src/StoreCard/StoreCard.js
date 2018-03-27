import React, { Component } from 'react'
import './StoreCard.css'
class StoreCard extends Component {
  render () {
    return (
      <div className='storeCard'>
        <h1 className='storeCardName'>{this.props.name}</h1>
        <img src={this.props.image} className='storeCardImage' />
      </div>
    )
  }
}

export default StoreCard
