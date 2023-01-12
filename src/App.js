import React from "react";
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';

import Header from "./containers/Header";
import ProductListing from "./containers/productListing";
import ProductDetails from "./containers/productDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <br></br>
        <br></br>

        <br></br>
        <Routes>
          {/* <Route path="/" exact component={ProductListing} /> */}
          <Route path='/' element={<ProductListing/>} />
          {/* <Route path="/product/:productId" exact component={ProductDetails} /> */}
          <Route path='/product/:productId' element={<ProductDetails/>} />
          <Route>404 Not found </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
