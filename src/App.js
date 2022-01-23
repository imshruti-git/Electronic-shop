import React, { useState, useEffect } from 'react'
import Topbar from "./component/topbar/Topbar.jsx";
import Cart from "./component/cart/Cart.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import Products from "./component/products/Products.jsx";
import Checkout from "./component/checkout/Checkout.jsx";

const theme = createTheme({
  palette:{
    primary: purple,
  },
})

function App() {

  const [products, setProducts]=useState([]);
  console.log(products);
  useEffect (() =>{
    list();
     },[])

    const list = async () => {
      const response = await  fetch ("https://electronic-ecommerce.herokuapp.com/api/v1/product");
      const jsonData=await response.json();
    
      setProducts(jsonData.data.product);  
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
      <div>      
        <Topbar />
        <Routes>
        <Route exact path="/" element={<Products products={products} />} >
          </Route>
          <Route exact path="/cart" element={<Cart />}>  
          </Route>
          <Route exact path="/checkout" element={<Checkout />}>  
          </Route>
        </Routes>     
    </div>
    </Router>
    </ThemeProvider>
    
    
  );
}

export default App;
