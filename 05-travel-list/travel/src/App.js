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
  const [quantity, setQuantity] = useState(1);
  const [des, setDes] = useState("");
  function handleChange(e) {
    e.preventDefault();
  }
  return (
    <form className="add-form" onSubmit={handleChange}>
      <h3>what do you need for your trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => (
          <option>{i + 1}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={des}
        onChange={(e) => setDes(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <li>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
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
