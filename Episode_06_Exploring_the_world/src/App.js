import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main"
import Footer from "./components/Footer"
import "../style.css"

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
