//Create edit component
import React, { Component } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
//link store to the edit store component
//display the data as props of the specific id of the specific store that user is accessing
//axios post edits to the db array

class EditStore extends Component {
  constructor(props) {
    super(props)

    this.state = {
      //   products: [],
      name: ''
      //   about: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ name: event.target.value })
  }

  handleSubmit(event) {
    console.log(event.target.value)
    event.preventDefault()
  }

  componentDidMount() {
    axios
      .get(
        'https://starving-artist.herokuapp.com/api/' +
          this.props.match.params.id
      )
      .then(res => {
        this.setState({
          //   products: res.data.products,
          //   image: res.data.store.image,
          name: res.data.name
        })
        // console.log(this.state.products)
      })
  }
  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder={this.state.name}
            />
            <input type="submit" value="Submit" />
          </label>
        </form>
      </div>
    )
  }
}

export default EditStore
