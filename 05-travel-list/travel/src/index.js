import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
// Destructing  Way

// import React, { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App";
// const rootElement = createRoot(document.getElementById("root"));
// rootElement.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
