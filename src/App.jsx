import { useState } from "react";
import PLANTS from "./data";
import PlantList from "./components/Plants/PlantList";
import CartList from "./components/Cart/CartList";
import "./index.css";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === plant.id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...plant, quantity: 1 }];
      }
    });
  }

  function incrementQuantity(id) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decrementQuantity(id) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <div className="app-container">
      <div className="plants-section">
        <h1>Proper Plants</h1>
        <h3>Plants</h3>
        <PlantList plants={PLANTS} addToCart={addToCart} />
      </div>

      <div className="cart-section">
        <h2>Cart</h2>
        <CartList
          cart={cart}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      </div>
    </div>
  );
}
