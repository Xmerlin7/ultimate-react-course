import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data";
import "./index.css"
console.log(pizzaData);
const App = () => {
  return (
    <div>
      <h1>I did it, Im on the way</h1>
      <Card skill1="HTML" skill2="CSS" skill3="React" skill4="JS" />
      <Card skill1="Valorant" skill2="CS" skill3="React" skill4="JS" />
    </div>
  );
};
function Card({ skill1, skill2, skill3, skill4 }) {
  return (
    <div className="CardHolder">
      <div className="pic">
        <img src="../pizzas/focaccia.jpg"></img>
      </div>
      <div className="title"> Seif Software Engineer</div>
      <div className="skillscont">
        <div className="skill1">{skill1}</div>
        <div>{skill2}</div>
        <div>{skill3}</div>
        <div>{skill4}</div>
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
