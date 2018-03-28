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
    axios.get('https://starving-artist.herokuapp.com/api/5abaa1b7b29ef80004072fa2/5abaa1b7b29ef80004072fa4')
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
        <p>By: {this.state.product.artist}</p>
        <p>{this.state.product.description}</p>
        <p>Price: {this.state.product.price}</p>
      </div>
    )
  }
}



export default ProductDetail
