import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data";
console.log(pizzaData);
const App = () => {
  return (
    <div>
      <h1>I did it, Im on the way</h1>
 
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
