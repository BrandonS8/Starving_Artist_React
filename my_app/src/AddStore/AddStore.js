import React, { Component } from 'react'
import axios from 'axios'
class AddStore extends Component {
  constructor() {
    super()
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    console.log(e.target.name.value)
<<<<<<< HEAD
    axios
      .post('https://starving-artist.herokuapp.com/api', {
        name: e.target.name.value,
        about: e.target.about.value
      })
      .then(res => console.log(res))
      .then(() => this.props.history.push('/'))
=======
    axios.post('https://starving-artist.herokuapp.com/api', {
      name: e.target.name.value,
      about: e.target.about.value
    }).then(res => console.log(res))
    .then(() => this.props.history.push('/'))
>>>>>>> b92974c289784a9227d2bdd1612b897fa6c1a91f
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
<<<<<<< HEAD
          <input type="text" name="name" placeholder="name" />
          <input type="text" name="about" placeholder="about" />
          <input type="submit" value="ADD" />
=======
          <input type='text' name='name' placeholder='name' required />
          <input type='text' name='about' placeholder='about' required />
          <input type='submit' value='ADD' />
>>>>>>> b92974c289784a9227d2bdd1612b897fa6c1a91f
        </form>
      </div>
    )
  }
}

export default AddStore
