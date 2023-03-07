// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
// import Default from './components/Default';
import Details from './components/Details';
import Cart from './components/Cart';
// import Product from './components/Product';
import ProductList from './components/ProductList';
import Default from './components/Default';

function App() {
  return (  <React.Fragment>
      <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={<ProductList/>}></Route>
        <Route path='details' element={<Details/>}></Route>
        <Route path='cart' element={<Cart/>}></Route>
        <Route path='*' element={<Default/>}></Route>
      </Routes>

    </React.Fragment>
  );
}

export default App;
