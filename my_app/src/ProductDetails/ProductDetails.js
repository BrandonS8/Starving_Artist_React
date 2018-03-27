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
        <h3>{this.state.product.title}</h3>
        
      </div>
    )
  }
}

export default ProductDetail
