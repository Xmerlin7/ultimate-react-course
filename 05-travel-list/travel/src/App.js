import { useMemo, useState } from "react";
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
  function handleReset() {
    setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddable={handleAdd} />
      <PackingList
        item={items}
        handleDelete={handleDelete}
        isPacked={isPacked}
        onhandelReset={handleReset}
      />
      <Stats items={items} />
    </div>
  );
}
function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
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
function PackingList({ item, handleDelete, isPacked, onhandelReset }) {
  const [sort, setSort] = useState("Description");
  const sortedItems = useMemo(() => {
    if (sort === "Description") {
      return item
        .slice() // Create a shallow copy to avoid mutating the original array
        .sort((a, b) =>
          a.description.toLowerCase().localeCompare(b.description.toLowerCase())
        );
    } else if (sort === "packed") {
      return item.slice().sort((a, b) => a.packed - b.packed);
    } else if (sort === "input") {
      return [...item]; // Return the original order
    }
  }, [item, sort]); // Recompute only when `item` or `sort` changes

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            handleDelete={handleDelete}
            key={item.id}
            isPacked={isPacked}
          />
        ))}
      </ul>
      <div className="action">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value={"Description"}>Sort by Description</option>
          <option value={"packed"}>Sort by packed</option>
          <option value={"input"}>Sort by input</option>
        </select>
        <button onClick={onhandelReset}>Reset</button>
      </div>
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
function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : ` 💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}

export default App;
