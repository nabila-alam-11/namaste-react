# Episode 03 - Laying the foundation

Scripts in package.json:-
 * In a package.json file, the "scripts" section is where you define and configure custom commands that can be executed using npm or yarn. These commands are typically used for various development and automation tasks in your project, such as running your application, testing, building, and more. It provides a convenient and consistent way to manage and execute these tasks, making development workflows easier to manage and share among team members.

 * Here's an example of what a "scripts" section might look like in a package.json file:

 "scripts": {
    "start": "node server.js",
    "build": "webpack --config webpack.config.js",
    "test": "jest",
    "lint": "eslint src"
  },

 * This script can be executed using command "npm start", "npm build", "npm test", "npm run lint"

* Fundamentals:-
 -React Element is an object.
 -When we render this element on DOM, then, it becomes an HTML element.
 -For displaying React element to the browser we use ReactDOM.
 -It will replace everything inside the root with whatever you are rendering from React Element.

* JSX:-

  *Imp:- JSX is separate and React is separate. JSX is not a part of React.
  * JS Engine understands ECMAScript.
  * JSX(transpiled before it reaches the JS)
  * Transpiling is done by PARCEL.
  * PARCEL is like a manager.It gives the responsibility   of transpiling to the package BABEL. 
   * BABEL is a Javascript compiler.
   * BABEL converts JSX to react code.
   * Behind the scenes, JSX code transpiled to React.createElement and this React.createElement creates a JS object and this ReactElement rendered on the DOM as a HTML element. 
   *Who is converting this code? 
   - BABEL
   *BABEL src: "https://babeljs.io/"


  * JSX is a syntax extension of JavaScript that combines the JavaScript and HTML-like syntax to provide highly functional, reusable markup. It’s used to create DOM elements which are then rendered in the React DOM.

  * While not required in React, JSX provides a neat visual representation of the application’s UI.

  * A JavaScript file containing JSX will have to be compiled before it reaches a web browser.

  * If you have to use attributes in JSX, you have to use camel case.

  * Single line and multiple line JSX:
  -Multiple Line JSX: A JSX expression that spans multiple lines must be wrapped in parentheses.

  Why we wrapped JSX in parentheses?
  - Because Babel needs to understand where is JSX starting and where it is ending.


 