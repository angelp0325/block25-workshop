import CartItem from "./CartItem";

export default function CartList({
  cart,
  incrementQuantity,
  decrementQuantity,
}) {
  return (
    <div className="cart-list">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
        ))
      )}
    </div>
  );
}
