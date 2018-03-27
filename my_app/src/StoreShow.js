import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
class LandingPage extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    //get react to show each item in the array using map
    const products = this.props.products.map(data => {
      console.log(data.title)
      return (
        <div className="eachProductPreview">
          <h2>{data.title}</h2>
          <img src={data.image} />
          <h2>{data.price}</h2>
          <h3>{data.description}</h3>
        </div>
      )
    })
    return (
      <div className="Products">
        {stores}
        <h1>{this.props.store[0].title}</h1>
      </div>
    )
  }
}

LandingPage.propTypes = {}

export default LandingPage
