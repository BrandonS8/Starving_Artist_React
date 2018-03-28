import React, { Component } from 'react'
import axios from 'axios'

class ProductDetail extends Component {
  constructor (props) {
    super(props)

    this.state = {
      product: this.props.products[0]

    }
  }

  render () {
    return (
      <div className='product-preview'>
        <img src={this.state.product.image} alt={this.state.product.name} className='product-image' />
        <h2>{this.state.product.title}</h2>
        <h3>{this.state.product.artist}</h3>
        <p>{this.state.product.description} {this.state.product.price}</p>
      </div>
    )
  }
}

componentDidMount () {
    axios.get('http://localhost:3001/api/storeid/product')
            .then(response => {
              this.setState({
                dogs: response.data
              })
            })
  }

export default ProductDetail
