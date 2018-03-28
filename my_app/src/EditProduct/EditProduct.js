import React, { Component } from 'react'
import axios from 'axios'

class AddProduct extends Component {
  constructor () {
    super()
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
          <p>
            <label for='title'>Product Title</label>
            <input type='text' name='title' />
          </p>
          <p>
            <label for='name'>Artitst</label>
            <input type='text' name='name' />
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
            <label for='imageUrl'>Image</label>
            <input type='text' name='imageUrl' />
          </p>
          <br />
          <input type='submit' value='ADD' />
        </form>
      </div>
    )
  }
}

export default AddProduct
