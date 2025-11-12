export default function PlantCard({ plant, addToCart }) {
  return (
    <div className="plant-card">
      <div className="plant-image">{plant.image}</div>
      <div className="plant-name">{plant.name}</div>
      <button onClick={() => addToCart(plant)}>Add to cart</button>
    </div>
  );
}
