import React, {Component} from 'react';
import { storeProducts, detailProduct } from '../data';

const ProductContext = React.createContext();

// Provider
// consumer

class ProductProvider extends Component{

state ={
  products: [],
  detailProduct,
  cart:[],
  modalOpen:true,
  modalProduct:detailProduct,
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0,
}
increment = (id) =>{
  console.log("this is increment method");
}
decrement = (id) =>{
  console.log("this is increment method");
}
removeItem = (id)=>{
  console.log("item removed");
}
clearCart = (id)=>{
  console.log("clearCart");
}
componentDidMount() {
  this.storeProducts();
}
storeProducts = () => {
  let products = [];
  storeProducts.forEach(item => {
    const singleItem = { ...item };
    products = [...products, singleItem];
  })
  this.setState({ products }); //setting products:products
};
getItem = (id) =>{
  const product = this.state.products.find(item=>item.id === id);
  return product;
}

// creating two methods
handleDetail = (id)=>{
  const product = this.getItem(id);
  this.setState(()=>{
    return {detailProduct:product};
  })
}
addTOCart = (id) =>{
  let tempProducts = [...this.state.products];
  const index = tempProducts.indexOf(this.getItem(id));
  const product = tempProducts[index];
  product.inCart = true;
  product.count = 1;
  const price = product.price;
  product.total = price;
  this.setState(()=>{
    return {product:tempProducts, cart:[...this.state.cart,product]};
  },()=> console.log(this.state.products));
};

openModal = id=>{
  const product = this.getItem(id);
  this.setState(()=>{
    return {modalProduct:product, modalOpen:true}
  })
}
closeModal = () =>{
  this.setState(()=>{
    return {modalOpen:false}
  })
}
  render(){
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart : this.addTOCart,
        openModal: this.openModal,
        closeModal: this.closeModal,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart:this.clearCart,
      }}
      >
         {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
