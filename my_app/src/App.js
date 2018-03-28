import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import axios from 'axios'
import data from './data.json'
import StoreList from './StoreList/StoreList'
import SingleStore from './SingleStore/SingleStore'
import AddStore from './AddStore/AddStore'
import ProductDetails from './ProductDetails/ProductDetails'
import EditStore from './EditStore/EditStore'

class App extends Component {
  render() {
    // console.log(data[0].name)
    return (
      <div className="container">
        <div className="navBar">
          <nav>
            <Link to="/">
              <h1>Starving Artist</h1>
            </Link>
            <h5>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </h5>
          </nav>
        </div>
        <Switch>
          <Route path="/add-store" component={AddStore} />
          {/* <Route path='/:id/add' component={AddProduct} /> */}
          <Route path="/:id/edit" component={EditStore} />
          {/* <Route path='/:id/:product/edit' component={EditProduct} /> */}
          <Route path="/:id/:product" component={ProductDetails} />
          <Route path="/:id" component={SingleStore} />
          <Route path="/" component={StoreList} />
        </Switch>
      </div>
    )
  }
}

export default App
