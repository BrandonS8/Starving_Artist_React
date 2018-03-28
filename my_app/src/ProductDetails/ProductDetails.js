import React, { Component } from 'react'
import axios from 'axios'

class ProductDetail extends Component {
  constructor () {
    super()

    this.state = {
      product: []

    }
  }

  componentDidMount () {
    axios.get('https://starving-artist.herokuapp.com/api/:storeId/:productId')
            .then(response => {
              this.setState({
                product: response.data
              })
            })
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



export default ProductDetail
