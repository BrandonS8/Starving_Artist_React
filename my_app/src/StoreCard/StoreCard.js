import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './StoreCard.css'
class StoreCard extends Component {
  render() {
    return (
      <div className="storeCard">
        <Link to={'/' + this.props.id}>
          <h1 className="storeCardName">{this.props.name}</h1>
          <img
            src={this.props.image}
            className="storeCardImage"
            alt={'product from ' + this.props.name}
          />
        </Link>
      </div>
    )
  }
}

export default StoreCard
