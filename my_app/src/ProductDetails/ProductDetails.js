import React, { Component } from 'react'
import axios from 'axios'
import './ProductDetails.css'

class ProductDetail extends Component {
  constructor () {
    super()

    this.state = {
      product: []
    }
  }

  componentDidMount () {
    axios
      .get(
        'https://starving-artist.herokuapp.com/api/' +
          this.props.match.params.id +
          '/' +
          this.props.match.params.product
      )
      .then(response => {
        this.setState({
          product: response.data
        })
      })
  }

  render () {
    return (
      <div className='product-preview'>
        <img
          src={this.state.product.image}
          alt={this.state.product.name}
          className='product-image'
        />
        <div className='product-info'>
          <h1>{this.state.product.title}</h1>
          <h2>By: {this.state.product.artist}</h2>
          <p className='product-desc'>"{this.state.product.description}"</p>
          <p className='product-price'>${this.state.product.price}</p>
          <a href={'/' + this.props.match.params.id + '/' + this.state.product._id + '/edit'}
            className='editProductButton'>Edit Product</a>
        </div>

      </div>
    )
  }
}

export default ProductDetail
