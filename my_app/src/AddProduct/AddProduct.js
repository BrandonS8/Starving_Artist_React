import React, { Component } from 'react'
import axios from 'axios'
import UploadFile from '../UploadFile/UploadFile'
import './Forms.css'

class AddProduct extends Component {
  constructor () {
    super()
    this.state = {
      image: '',
      status: 'No Image Set',
      error: ''
    }
    this.setImage = this.setImage.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.startUpload = this.startUpload.bind(this)
  }
  startUpload () {
    this.setState({
      status: 'uploading'
    })
  }
  onSubmit (e) {
    e.preventDefault()
    if (this.state.status === 'uploaded') {
      this.setState({
        error: ''
      })
      axios.post('https://starving-artist.herokuapp.com/api/' + this.props.match.params.id, {
        title: e.target.title.value,
        artist: e.target.artist.value,
        description: e.target.description.value,
        price: e.target.price.value,
        image: this.state.image
      }).then(res => console.log(res))
        .then(() => this.props.history.push('/' + this.props.match.params.id))
    } else {
      this.setState({
        error: 'Wait for image to upload jeez speedy.'
      })
    }
  }

  setImage (url) {
    this.setState({
      image: url,
      status: 'uploaded'
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
        <UploadFile setImage={this.setImage} startUpload={this.startUpload} />

          <input type='submit' value='ADD' />
          <p>{this.state.error}</p>
        </form>

        <div className='previewImage'>
          {this.state.image !== '' ? <img src={this.state.image} alt='product' /> : this.state.status === 'uploading' ? <div className='loading' /> : <p>Upload an image</p>}
        </div>
      </div>
    )
  }
}

export default AddProduct
