import { useState } from "react";
import "./index.css";

function App() {
  const [items, setItems] = useState([]);
  function handleAdd(newItem) {
    // Renamed parameter to 'newItem'
    setItems((currentItems) => [...currentItems, newItem]); // Use the current state
  }
  function handleDelete(id) {
    const updatedItems = items.filter((item) => item.id !== id); // Filter out the item with the given id
    setItems(updatedItems); // Update the state with the filtered array
  }

  function isPacked(id) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddable={handleAdd} />
      <PackingList
        item={items}
        handleDelete={handleDelete}
        isPacked={isPacked}
      />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1>🌴 Far Away 🛄</h1>;
}

function Form({ onAddable }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleChange(e) {
    e.preventDefault();
    const newItem = { description, quantity, packed: false, id: Date.now() };
    if (!description) return;
    onAddable(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleChange}>
      <h3>what do you need for your trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => (
          <option value={i + 1} key={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
function PackingList({ item, handleDelete, isPacked }) {
  return (
    <div className="list">
      <ul>
        {item.map((item) => (
          <Item
            item={item}
            handleDelete={handleDelete}
            key={item.id}
            isPacked={isPacked}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, handleDelete, isPacked }) {
  return (
    <li>
      <input type="checkbox" onClick={() => isPacked(item.id)} />
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.quantity} {item.description}
      </span>
      <button className="x" onClick={() => handleDelete(item.id)}>
        x
      </button>
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
