import React from "react";
import ReactDOM from "react-dom";

// JSX - HTML-like or XML-like syntax
// React Element
const jsx_heading = <h1 id="heading">Namaste React using JSX.</h1>;

// React functional Component

const HeadingComponent1 = () => {
  return <h1>Namaste React Functional Component</h1>;
};

const HeadingComponent2 = () => (
  <h1 className="heading">Namaste React Functional Component</h1>
);

//Embedding JavaScript in JSX
const sum = 10 * 10;
const EmbeddingJS = () => {
  return (
    <div>
    <h2>{sum}</h2>
    <h2>{10 * 4}</h2>
    </div>
    );
};

// Nested JSX Element
const NestedJSX = () => {
  return (
    <div className="parent">
    {jsx_heading}
      <HeadingComponent1 />
      <HeadingComponent2 />
      <EmbeddingJS />
      <h1 className="child">I am a child!</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NestedJSX />);
