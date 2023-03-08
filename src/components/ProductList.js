import React from 'react'
import Product from './Product.js';
import Title from './Title.js';
import { ProductConsumer } from './context.js';

export default function ProductList() {
  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="Products"></Title>
          {/* products row */}
          <div className="row">
            <ProductConsumer>
              {(value)=>{
                return value.products.map((product)=>{
                  return <Product key={product.id} product={product}></Product>
                });
              }}
            </ProductConsumer>
          </div>


        </div>
      </div>
    </React.Fragment>
  )
}

