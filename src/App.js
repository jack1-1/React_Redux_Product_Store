import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
       <Header/>
       <Switch>
       
       <Route path="/" exact component={ProductListing}/>
       <Route path="/product/:productId" exact component={ProductDetail }/>
       <Route>404 Not Found</Route>
       
       </Switch>
       </Router>
      </div>
    );
  }
}

export default App;