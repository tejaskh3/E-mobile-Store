import React from 'react'
// import Product from './Product.js';
import { useState } from 'react';
import Title from './Title.js';
import { storeProducts } from '../data.js';


export default function ProductList() {
  const [Products, setProduct] = useState([]);
  // setProduct(storeProducts);
  // console.log(Products);
  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="Products"></Title>
          {/* products row */}
          <div className="row">
            .col
          </div>


        </div>
      </div>
    </React.Fragment>
  )
}

