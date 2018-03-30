import React, { Component } from 'react'

class ProductCard extends Component {
  render() {
    return (
      <div className="productCard">
        <img
          src={this.props.image}
          alt="image of art"
          className="imgSizeControl"
        />
        <h1>{this.props.title}</h1>
        <h3>${this.props.price}</h3>
      </div>
    )
  }
}

export default ProductCard
