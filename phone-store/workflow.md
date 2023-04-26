1. index connected to index.css which is rendering root element having app inside it
2. App importing app.css and containg all other components and returning using routes.
3. components folder have multiple components in which we are using style components to style these component parts.
4. working on navbar.js used style component in


# 5. Now moved to productList
1. made title, build base using row-col for phones
2. for data problem i.e, we need to
show data in each component either we can prop drill or use context api;
3. now created context.js
 having name ProductContext which contains consumer and provider named ProductConsumer and ProductProvider, the provider is imported to index.js to implement it on the top of our app.
 then consumer is impoted to productlist to use the data inside that context.
->using cb function to pass the data of contextapi

# 6. using prop-types, just to make sure the data is in correct format
after using prop types and stylling the  product list, now we are moving to details part
In details part we have used ButtonContainer as well also showed something new, that we can pass props in styled component as well.
7. then in context api we created some methods openModal and closeModal than created a new component named modal.js
8. working with modal.js in which we are working for details of any specific product.
9. 
question?
1.can we only use single product provider?
2.read a lot about react routes
3. link and styled components
4. context api vs useContext
5. what is this exaclty doing?
storeProducts = () => {
  let products = [];
  storeProducts.forEach(item => {
    const singleItem = { ...item };
    products = [...products, singleItem];
  })
  ture meaning of spread operator.
  6. this.state. yaha jo this.state hai uska mtblt state name diya hai humne isliye hai ya ye compulsion hai aisa karna.
  7.

