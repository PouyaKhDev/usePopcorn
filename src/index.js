import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./components/StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <StarRating
      size="3rem"
      fillColor="blue"
      borderColor="#444"
      messages={["Terrible", "Bad", "Ok", "Good", "Amazing"]}
    />
    <StarRating maxRating={10} />
    <StarRating
      maxRating={20}
      messages={["Terrible", "Bad", "Ok", "Good", "Amazing"]}
    />
    <StarRating maxRating={15} size="3rem" defaultRating={5} />
  </React.StrictMode>
);
