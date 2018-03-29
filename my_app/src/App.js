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
import EditProduct from './EditProduct/EditProduct'
import AddProduct from './AddProduct/AddProduct'

class App extends Component {
  render () {
    return (
<<<<<<< HEAD
      <div className="container">
        <nav>
          <Link to="/" className="text-decoration">
            <h1 className="pageTitle">Starving Artist</h1>
          </Link>
          <div className="navRight">
            <Link to="/add-Store">Create Store</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </nav>

=======
      <div className='container'>
        <div className='navBar'>
          <nav>
            <Link to='/' className='text-decoration'>
              <h1 className='pageTitle'>Starving Artist</h1>
            </Link>
            <Link to='/add-Store' className='text-decoration-right'>Create Store</Link>
            <Link to='/login' className='text-decoration-right'>Login</Link>
            <Link to='/signup' className='text-decoration-right'>Signup</Link>
          </nav>
        </div>
>>>>>>> accfe8d5eb64594e03a813be5553039f3cee53e2
        <Switch>
          <Route path='/add-store' component={AddStore} />
          <Route path='/:id/add' component={AddProduct} />
          <Route path='/:id/edit' component={EditStore} />
          <Route path='/:id/:product/edit' component={EditProduct} />
          <Route path='/:id/:product' component={ProductDetails} />
          <Route path='/:id' component={SingleStore} />
          <Route path='/' component={StoreList} />
        </Switch>
      </div>
    )
  }
}

export default App
