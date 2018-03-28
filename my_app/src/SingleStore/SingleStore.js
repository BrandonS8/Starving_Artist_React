// Create Store Component
//     1.1. Create a link to the new component in App
//     1.2. Import server through axios
//     1.3. Import axios
//     1.4. Import react
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
//     1.5. Create a Store Class
//     1.6. Use props to call data
//     1.7. Set storeProducts equal to the array of products from the server data so that when someone adds or deletes a product in the store, it accesses the server side database.

class SingleStore extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {}

  componentDidMount() {
    axios
      .get('https://starving-artist.herokuapp.com/api/' + this.props.params.id)
      .then(function(response) {
        console.log(response)
      })
  }

  //     1.8. Enact axios calls that represent what's happening on the server when they delete/add product and edit store.

  //     1.9. Render the component with JSX

  render() {
    return <div />
  }
}

SingleStore.propTypes = {}

export default SingleStore

//     1.10. Add CSS to make it visually appealing
