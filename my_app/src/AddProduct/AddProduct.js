import React, { Component } from 'react'
import axios from 'axios'

class AddProduct extends Component {
  constructor () {
    super()
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (e) {
    e.preventDefault()
    console.log(e.target.name.value)
    axios.post('https://starving-artist.herokuapp.com/api/' + this.props.match.params.id, {
      title: e.target.title.value,
      artist: e.target.artist.value,
      description: e.target.description.value,
      price: e.target.price.value,
      image: e.target.image.value
    }).then(res => console.log(res))
      .then(() => this.props.history.push('/' + this.props.match.params.id))
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
            <input type='text' name='artist' />
          </p>
          <p>
            <label for='description'>Description</label>
            <input type='text' name='description' />
          </p>
          <p>
            <label for='Price'>price</label>
            <input type='text' name='price' />
          </p>
          <p>
            <label for='image'>Image</label>
            <input type='text' name='image' />
          </p>
          <br />
          <input type='submit' value='ADD' />
        </form>
      </div>
    )
  }
}

export default AddProduct
