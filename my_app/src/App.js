import React, { Component } from 'react'
import './App.css'
import {
  Link,
  Route,
  Switch
} from 'react-router-dom'
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
      <div className='container'>
        <nav>
          <Link to='/' className='text-decoration'>
            <div className='pageTitle'>
              <h1>Starving Artist</h1>
              <h3>
                A free platform for student-artists to sell their work from
                local universities in the DC area.
              </h3>
            </div>
          </Link>

          <Route exact path='/' render={() => <div className='navRight'> <Link to='/add-Store'>Create Store</Link> </div>} />
          {/* <Link to='/add-Store'>Create Store</Link> */}
          {/* <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link> */}
        </nav>

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
