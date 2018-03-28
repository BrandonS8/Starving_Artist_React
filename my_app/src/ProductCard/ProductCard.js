import React, { Component } from 'react'

class ProductCard extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <img src={this.props.image} alt="image of art" />
        <h3>{this.props.price}</h3>
      </div>
    )
  }
}

export default ProductCard
