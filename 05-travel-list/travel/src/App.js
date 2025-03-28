import { useState } from "react";
import "./index.css";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Games", quantity: 12, packed: false },
  { id: 4, description: "Laptop", quantity: 12, packed: true },
];
function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1>🌴 Far Away 🛄</h1>;
}
function Form() {
  const [quantity, setQuantity] = useState(1)
  function handleChange(e){
    setQuantity(e.target.value)
  }
  return (
    <div className="add-form">
      <h3>what do you need for your trip?</h3>
      <select value={quantity} onChange={handleChange}>
      {Array.from({length: 20}, (_, i) => i+1)}
      </select>
      <input></input>
      <button>Add</button>
    </div>
  );
}
function PackingList() {
  return (
    <div className="list">
      <li>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </li>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.quantity} {item.description}
      </span>
      <button>x</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      you have X numbers on your list, and you already packed X (%x)
    </footer>
  );
}
export default App;
