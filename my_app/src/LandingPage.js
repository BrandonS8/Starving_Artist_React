import React, { Component } from 'react'
import PropTypes from 'prop-types'
import data from 'data.json'

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
    const stores = this.props.store.map(data => {
      return (
        <div className="eachStorePreview">
          <h2>{this.props.title}</h2>
          <img src={this.props.image} />
          <h2>{this.props.price}</h2>
          <h3>{this.props.description}</h3>
        </div>
      )
    })
    return <div className="LandingPage">{stores}</div>
  }
}

LandingPage.propTypes = {}

export default LandingPage
