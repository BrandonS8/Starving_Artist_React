// Create Store Component
import React, { Component } from 'react'
import axios from 'axios'
import ProductCard from '../ProductCard/ProductCard'
import { Link } from 'react-router-dom'

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
          products: res.data.products,
          name: res.data.name,
          about: res.data.about
        })
        // console.log(this.state.products)
      })
  }
  //     1.8. Enact axios calls that represent what's happening on the server when they delete/add product and edit store.

  //     1.9. Render the component with JSX

  render() {
    const products = this.state.products.map((product, i) => {
      return (
        <Link to={'/' + this.props.match.params.id + '/' + product._id}>
          <ProductCard
            key={i}
            title={product.title}
            image={product.image}
            price={product.price}
            id={product._id}
          />
        </Link>
      )
    })
    // return { products }
    return (
      <div>
        <div className="SingleStoreContainer">
          <div className="singleStoreEditAdd">
            <Link to={this.props.match.params.id + '/edit'}>
              <h3>Edit this Store</h3>
            </Link>
            <a
              href={'/' + this.props.match.params.id + '/add'}
              className="addProductButton"
              id="addProduct"
            >
              Add A Product
            </a>
          </div>
          <div>
            <h1>{this.state.name}</h1>
            <h2>{this.state.about}</h2>
          </div>
        </div>
        <div className="ProductCardContainer">{products}</div>
      </div>
    )
  }
}
export default SingleStore

//     1.10. Add CSS to make it visually appealing
