# Assignment 03 - Laying the foundation

- Topics

  - JSX
  - React.createElement vs JSX
  - Benefits of JSX
  - Behind the scenes of JSX
  - Babel & Parcel role in JSX
  - Components
    - Functional Components
      - Composing Components

- Assignment

- 1. What is JSX?

  - JSX is a syntax extension of JavaScript that combines the JavaScript and HTML-like syntax to provide highly functional, reusable markup. It’s used to create DOM elements which are then rendered in the React DOM.

  - While not required in React, JSX provides a neat visual representation of the application’s UI.

  - A JavaScript file containing JSX will have to be compiled before it reaches a web browser.

  - If you have to use attributes in JSX, you have to use camel case.

- Single line and multiple line JSX:

  - Multiple Line JSX: A JSX expression that spans multiple lines must be wrapped in parentheses.

  - Why we wrapped JSX in parentheses?
    - Because Babel needs to understand where is JSX starting and where it is ending

- 2. Superpowers of JSX

  - Declarative UI: Easily define user interfaces.
  - Component Reusability: Create reusable UI components.
  - JavaScript Integration: Embed JavaScript logic.\*Readability: Resembles HTML for clarity.
  - Performance Optimization: Efficient rendering.

- 3> Role of type attribute in script tag? What options can I use there?

  - The type attribute in a <script> tag tells the browser what kind of code is inside the script. For JavaScript, you can usually skip it because browsers assume it's JavaScript by default.

  - type attribute can be of the following types:

    - text/javascript : It is the basic standard of writing javascript code inside the <script> tag.
    - Syntax: <script type="text/javascript"></script>

    - text/ecmascript : this value indicates that the script is following the EcmaScript standards.

  - module: This value tells the browser that the script is a module that can import or export other files or modules inside it.
  - text/babel : This value indicates that the script is a babel type and required babel to transpile it.
  - text/typescript: As the name suggest the script is written in TypeScript.

* Q: {TitleComponent} vs {<TitleComponent/>} vs  {<TitleComponent></TitleComponent>} in JSX.
A: The Difference is stated below:

  * {TitleComponent}: This value describes the TitleComponent as a javascript expression or a variable. The {} can embed a javascript expression or a variable inside it.
  * <TitleComponent/> : This value represents a Component that is basically returning Some JSX value. In simple terms TitleComponent a function that is returning a JSX value. A component is written inside the {<  />} expression.
  * <TitleComponent></TitleComponent> : <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent only when < TitleComponent /> has no child components. The opening and closing tags are created to include the child components.
  * <TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>