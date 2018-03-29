// Create edit component
import React, { Component } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
// link store to the edit store component
// display the data as props of the specific id of the specific store that user is accessing
// axios post edits to the db array

class EditStore extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      about: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    // console.log(event.target.value)
    event.preventDefault()
    axios
      .put(
        'https://starving-artist.herokuapp.com/api/' +
          this.props.match.params.id +
          '/edit',
        {
          name: this.state.name,
          about: this.state.about
        }
      )
      .then(() => this.props.history.push('/' + this.props.match.params.id))
      .then(res => {
        // console.log(res)
      })
  }

  componentDidMount() {
    axios
      .get(
        'https://starving-artist.herokuapp.com/api/' +
          this.props.match.params.id
      )
      .then(res => {
        this.setState({
          name: res.data.name,
          about: res.data.about
        })
        // console.log(this.state.products)
      })
  }

  handleDelete(e) {
    e.preventDefault()
    // console.log(this.props.match.params.id)
    axios
      .delete(
        'https://starving-artist.herokuapp.com/api/' +
          this.props.match.params.id
      )
      .then(() => this.props.history.push('/'))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder={this.state.name}
            />
            <input
              name="about"
              type="text"
              value={this.state.about}
              onChange={this.handleChange}
              placeholder={this.state.about}
            />
            <input type="submit" value="Submit" />
          </label>
        </form>
        <button onClick={this.handleDelete}>
          Completely Destroy this store
        </button>
      </div>
    )
  }
}

export default EditStore
