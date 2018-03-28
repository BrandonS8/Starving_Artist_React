import React, { Component } from 'react'

class ProductDetail extends Component {
  constructor (props) {
    super(props)

    this.state = {
      product: this.props.info
    }
  }

  render () {
    return (
      <div className='product-preview'>
        <img src={this.state.product.imageUrl} alt={this.state.product.name} className='product-image' />
        <h2>{this.state.product.title}</h2>
        <h3>{this.state.product.artist}</h3>
        <p>{this.state.product.description} {this.state.product.price}</p> 
      </div>
  )  
    }
}

export default ProductDetail
