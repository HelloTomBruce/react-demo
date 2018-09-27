import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './component/Home';
import About from './component/About'
import Product from './component/Product'
import Provider from './Provider.js'
import store from './redux/store.js'

import './css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <Link to="home">Home</Link>
          <Link to="product">Product</Link>
          <Link to="about">About</Link>
          <Route path="/home" component={Home}/>
          <Route path="/product" component={Product}/>
          <Route path="/about" component={About}/>
        </Provider>
      </Router>
    );
  }
}

export default App;
