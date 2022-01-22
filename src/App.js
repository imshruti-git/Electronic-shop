import React, { useState, useEffect } from 'react'
import Topbar from "./component/topbar/Topbar.jsx";
import Cart from "./component/cart/Cart.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Products from "./component/products/Products.jsx";

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
    <Router>
      <div>
        
        <Topbar />
        <Routes>
        <Route exact path="/" element={<Products products={products} />} >
          </Route>
          <Route exact path="/cart" element={<Cart />}>  
          </Route>
        </Routes>
        
    </div>
    </Router>
    
  );
}

export default App;
