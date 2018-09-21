import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './component/Home';
import About from './component/About'
import Product from './component/Product'

import './css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="home">Home</Link>
          <Link to="product">Product</Link>
          <Link to="about">About</Link>
          <Route path="/home" component={Home}/>
          <Route path="/product" component={Product}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
