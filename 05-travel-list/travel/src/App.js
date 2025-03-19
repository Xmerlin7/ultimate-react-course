import "./index.css";
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
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Games", quantity: 12, packed: false },
  { id: 4, description: "Laptop", quantity: 12, packed: false },
];
function Logo() {
  return <h1>🌴 Far Away 🛫</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>what do you need for your trip?</h3>
    </div>
  );
}
function PackingList() {
  return (
    <div className="list">
      <li >{initialItems.map((item)=> <Item item={item.description}/>) }</li>
    </div>
  );
}
function Item({item}){
  return(
    <h3>{item}</h3>
  )
}
function Stats() {
  return (
    <footer className="stats">
      you have X numbers on your list, and you already pcked X (%x)
    </footer>
  );
}
export default App;
