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

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios
      .get(
        'https://starving-artist.herokuapp.com/api/' +
          this.props.match.params.id
      )
      .then(res => {
        this.setState({
          products: res.data.products
        })
        console.log(this.state.products)
      })
  }

  // .then(res => {
  //   this.setState({
  //     stores: res.data
  //   })
  // })
  //     1.8. Enact axios calls that represent what's happening on the server when they delete/add product and edit store.

  //     1.9. Render the component with JSX

  render() {
    const products = this.state.products.map((product, i) => {
      return (
        <div>
          <img src={product.image} alt="image of art" />
          <h1>{product.title}</h1>
        </div>
      )
    })
    // return { products }
    return <div>{products}</div>
  }
}
export default SingleStore

//     1.10. Add CSS to make it visually appealing
