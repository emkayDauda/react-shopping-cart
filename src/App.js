import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import productsContext from "./contexts/productsContext";
import CartsContext from "./contexts/CartsContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState(() => {
	const oldCart = JSON.parse(localStorage.getItem('cart'))
	console.log(oldCart);
	
	return oldCart ? oldCart : []
  });

  const addItem = item => {
	setCart([...cart, item]);
	localStorage.setItem('cart', JSON.stringify([...cart, item]));
  };

  const removeItem = item => {
	  const remainder = cart.filter(currentItem => currentItem.id !== item.id)
	  setCart(remainder)
	localStorage.setItem('cart', JSON.stringify(remainder));

  }

  return (
    <div className="App">
      <CartsContext.Provider value={{ cart }}>
        <Navigation />
      </CartsContext.Provider>

      {/* Routes */}
      <productsContext.Provider value={{ products, addItem, removeItem }}>
        <Route exact path="/" component={Products} />
      </productsContext.Provider>

      <CartsContext.Provider value={{ cart, removeItem }}>
        <Route path="/cart" component={ShoppingCart} />
      </CartsContext.Provider>
    </div>
  );
}

export default App;
