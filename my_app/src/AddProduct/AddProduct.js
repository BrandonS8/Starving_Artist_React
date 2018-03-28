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
    axios.post('https://starving-artist.herokuapp.com/api', {
      title: e.target.title.value,
      name: e.target.name.value,
      description: e.target.description.value,
      price: e.target.price.value,
      imageUrl: e.tartget.image.value
    }).then(res => console.log(res))
  }

  render () {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label for='title'>Product Title</label>
          <input type='text' name='title' />

          <label for='name'>Artitst</label>
          <input type='text' name='name' />

          <label for='description'>Description</label>
          <input type='text' name='description' />

          <label for='price'>price</label>
          <input type='text' name='price' />

          <label for='imageUrl'>Image</label>
          <input type='text' name='imageUrl' />

          <input type='submit' value='ADD' />
        </form>
      </div>
    )
  }
}

export default AddProduct
