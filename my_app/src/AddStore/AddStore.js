import React, { Component } from 'react'
import axios from 'axios'
import Forms from '../AddProduct/Forms.css'


class AddStore extends Component {
  constructor () {
    super()
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (e) {
    e.preventDefault()
    console.log(e.target.name.value)
    axios
      .post('https://starving-artist.herokuapp.com/api', {
        name: e.target.name.value,
        about: e.target.about.value
      })
      .then(res => console.log(res))
      .then(() => this.props.history.push('/'))
  }

  render () {
    return (
      <div className='container-form'>
        <form onSubmit={this.onSubmit}>
          <input type='text' name='name' placeholder='name' className='width'/>
          <input type='text' name='about' placeholder='about' className='width' />
          <input type='submit' value='Create'className='btn-width' />
        </form>
      </div>
    )
  }
}

export default AddStore
