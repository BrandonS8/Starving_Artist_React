import React, { Component } from 'react'
import axios from 'axios'
import UploadFile from '../UploadFile/UploadFile'
import './Forms.css'

class AddProduct extends Component {
  constructor () {
    super()
    this.state = {
      image: ''
    }
    this.setImage = this.setImage.bind(this)
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
      image: this.state.image
    }).then(res => console.log(res))
      .then(() => this.props.history.push('/' + this.props.match.params.id))
  }

  setImage (url) {
    this.setState({
      image: url
    })
    console.log(this.state.image)
  }

  render () {
    return (
      <div className='container-form'>
        
        <form onSubmit={this.onSubmit}>

          <label for='title'>Title</label>
          <input type='text' name='title' />

          <label for='artist'>Artitst</label>
          <input type='text' name='artist' />

          <label for='description'>Description</label>
          <input type='text' name='description' />

          <label for='Price'>Price</label>
          <input type='number' name='price' />

            Image
        <UploadFile setImage={this.setImage} />

          <input type='submit' value='ADD' />
        </form>
        
        <div className='previewImage'>
          {this.state.image != '' ? <img src={this.state.image} /> : <p>No Image Set</p>}
        </div>
      </div>
    )
  }
}

export default AddProduct
