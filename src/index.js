import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./components/StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating />
    <StarRating maxRating={10} />
    <StarRating maxRating={20} />
    <StarRating maxRating={5} />
  </React.StrictMode>
);
