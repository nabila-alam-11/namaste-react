// const heading = React.createElement(  // React element: Normal javascript object
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React!"
// );

/*
 * <div class="parent">
 *  <div class="child1">
 *   <h1>I am an h1 tag.</h1>
 *   <h2>I am an h2 tag.</h2>
 *  <div>
 *  <div class="child2">
 *   <h1>I am an h1 tag.</h1>
 *   <h2>I am an h2 tag.</h2>
 *  <div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    [
      React.createElement("h1", {}, "I am an h1 tag"),
      React.createElement("h2", {}, "I am an h2 tag"),
    ],
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I am an h1 tag"),
      React.createElement("h2", {}, "I am an h2 tag"),
    ])
  ),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent); // object
