import React, {Component} from 'react';
import { storeProducts, detailProduct } from '../data';

const ProductContext = React.createContext();
// Provider
// consumer

class ProductProvider extends Component{
state ={
  products: storeProducts,
  detailProduct,
}
// creating two methods
handleDetail = ()=>{
  console.log("hello form detail");
}
addTOCart = () =>{
  console.log('Hello from add to cart.')
}
  render(){
    return (
      <ProductContext.Provider value={
        {...this.state,
          handleDetail: this.handleDetail,
          addToCart : this.addTOCart,
      }}>
         {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
