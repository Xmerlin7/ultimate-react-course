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
  return <div className="list"></div>;
}
function Stats() {
  return (
    <footer>
      you have X numbers on your list, and you already pcked X (%x)
    </footer>
  );
}
export default App;
