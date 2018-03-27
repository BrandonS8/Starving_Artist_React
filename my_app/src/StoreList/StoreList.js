import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import './StoreList.css'
import StoreCard from '../StoreCard/StoreCard'
class StoreList extends Component {
  constructor () {
    super()
    this.state = {
      stores: []
    }
  }
  componentDidMount () {
    axios.get('https://starving-artist.herokuapp.com/api')
    .then(res => {
      this.setState({
        stores: res.data
      })
    })
  }
  render () {
    // get react to show each item in the array using map
    const stores = this.state.stores.map((store, i) => {
      return <StoreCard key={i} image={store.products[0].image} name={store.name} />
    })
    return (
      <div className='storeList'>
        {stores}
      </div>
    )
  }
}

export default StoreList
