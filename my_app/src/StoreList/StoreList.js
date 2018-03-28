import React, { Component } from 'react'
import axios from 'axios'

import './StoreList.css'
import StoreCard from '../StoreCard/StoreCard'

class StoreList extends Component {
  constructor() {
    super()
    this.state = {
      stores: []
    }
  }
  // make api request to get all stores
  componentDidMount() {
    axios.get('https://starving-artist.herokuapp.com/api').then(res => {
      this.setState({
        stores: res.data
      })
    })
  }
  render() {
    // use map to make a StoreCard for each store
    const stores = this.state.stores.map((store, i) => {
      return (
        <StoreCard
          key={i}
          image={
            store.products[0]
              ? store.products[0].image
              : 'https://i.vimeocdn.com/portrait/1274237_640x640'
          }
          name={store.name}
          id={store._id}
        />
      )
    })
    return (
      <div className="storeList">
        <a href="/add-store" className="addStoreButton">
          Add A Store
        </a>
        {stores}
      </div>
    )
  }
}

export default StoreList
