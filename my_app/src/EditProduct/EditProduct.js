import React, { Component } from 'react'
import axios from 'axios'
import Forms from '../AddProduct/Forms.css'

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
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit (e) {
    e.preventDefault()
    console.log(e.target.name.value)
    axios.put('https://starving-artist.herokuapp.com/api/' + this.props.match.params.id +
             '/' + this.props.match.params.product + '/edit', {

               title: this.state.title,
               artist: this.state.artist,
               description: this.state.description,
               price: this.state.price,
               image: this.state.image
             }).then(res => console.log(res))
        .then(() => this.props.history.push('/' + this.props.match.params.id +
        '/' + this.props.match.params.product))
  }

  componentDidMount () {
    axios.get('https://starving-artist.herokuapp.com/api/' + this.props.match.params.id +
              '/' + this.props.match.params.product)
            .then(response => {
              this.setState({
                title: response.data.title,
                artist: response.data.artist,
                description: response.data.description,
                price: response.data.price,
                image: response.data.image
              })
            })
  }

  handleDelete (e) {
    e.preventDefault()
    axios
      .delete(
        'https://starving-artist.herokuapp.com/api/' +
        this.props.match.params.id + '/' +
        this.props.match.params.product
      )
      .then(() => this.props.history.push('/' + this.props.match.params.id))
  }

  render () {
    return (
      <div className='container-form'>
        <form onSubmit={this.onSubmit}>

          <label for='title'>Title</label>
          <input type='text' name='title' value={this.state.title} onChange={this.handleChange} />

          <label for='artist'>Artitst</label>
          <input type='text' name='artist' value={this.state.artist} onChange={this.handleChange} />

          <label for='description'>Description</label>
          <input type='text' name='description' value={this.state.description} onChange={this.handleChange} />

          <label for='Price'>Price</label>
          <input type='text' name='price' value={this.state.price} onChange={this.handleChange} />

          <label for='image'>Image</label>
          <input type='text' name='image' value={this.state.image} onChange={this.handleChange} />

          <input type='submit' value='Edit' />
          <button onClick={this.handleDelete}>Delete Product</button>
        </form>

      </div>
    )
  }
}

export default EditProduct
