import React, { Component } from 'react'
import axios from 'axios'
import Forms from './Forms.css'

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
      <div className='container'>
        <form onSubmit={this.onSubmit}>

          <label for='title'>Title</label>
          <input type='text' name='title' />

          <label for='artist'>Artitst</label>
          <input type='text' name='artist' />

          <label for='description'>Description</label>
          <input type='text' name='description' />

          <label for='Price'>Price</label>
          <input type='text' name='price' />

          <label for='image'>Image</label>
          <input type='text' name='image' />
          <input type='submit' value='ADD' />
        </form>
       
      </div>
    )
  }
}

export default AddProduct
