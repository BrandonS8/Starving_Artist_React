import React, { Component } from 'react'
import axios from 'axios'

class EditProduct extends Component {
  constructor () {
    super()
    this.state = {
      title: '',
      artist: '',
      description: '',
      price: 0,
      image: ''

    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount () {
    axios.get('https://starving-artist.herokuapp.com/api/' + this.props.match.params.id + '/' + this.props.match.params.product)
            .then(response => {
              this.setState({
                product: response.data
              })
            })
  }

  onSubmit (e) {
    e.preventDefault()
    console.log(e.target.name.value)
    axios.put('https://starving-artist.herokuapp.com/api', {
      title: e.target.title.value,
      artist: e.target.artist.value,
      description: e.target.description.value,
      price: e.target.price.value,
      image: e.target.image.value
    }).then(res => console.log(res))
        .then(() => this.props.history.push('/' + this.props.match.params.id + '/' + this.props.match.params.product))
  }

  render () {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <p>
            <label for='title'>Product Title</label>
            <input type='text' name='title' />
          </p>
          <p>
            <label for='artist'>Artitst</label>
            <input type='text' name='artist' value={this.state.product.artist} />
          </p>
          <p>
            <label for='description'>Description</label>
            <input type='text' name='description' value={this.state.product.description} />
          </p>
          <p>
            <label for='Price'>price</label>
            <input type='text' name='price' value={this.state.product.price} />
          </p>
          <p>
            <label for='image'>Image</label>
            <input type='text' name='image' value={this.state.product.image} />
          </p>
          <br />
          <input type='submit' value='Edit' />
        </form>
      </div>
    )
  }
}

export default EditProduct
