export default function CartItem({
  item,
  incrementQuantity,
  decrementQuantity,
}) {
  return (
    <div className="cart-item">
      <span className="cart-image">{item.image}</span>
      <span className="cart-name">{item.name}</span>
      <div className="cart-controls">
        <button onClick={() => decrementQuantity(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => incrementQuantity(item.id)}>+</button>
      </div>
    </div>
  );
}
