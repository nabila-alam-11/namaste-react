# EPISODE 04 - TALK IS CHEAP, SHOW ME THE CODE!

* Q1:- Is JSX mandatory for REACT?
  * A1:- * No, JSX(JavaScript XML) is not mandatory for building React applications, but it is highly recommended and widely used in the React community. JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your Javascript files.It provides a more declarative and component-based way to define the structure of your UI in React.
  * While you can technically build React applications without JSX by using React.createElement, it can make your code more verbose and harder to read. JSX, on the other hand, provides a more intuitive and concise way to define your UI components.
  * Here's an example of JSX code in React:-
  * function App() {
    return (
     * <div>
       * <h1>Hello, React!</h1>
       * <p>This is a JSX component.</p>
     * </div>
    );
  }
 * In the example above, JSX is used to define the  structure of a React component. It looks similar to HTML but is actually transpiled to JavaScript code that React can understand.

* Q2:- Is ES6 mandatory for React?
  * A2:- 
   * ES6 (ECMAScript 2015) is not mandatory for React, but it is highly recommended and widely used when developing React applications. React itself doesn't require ES6 specifically, but it makes React development more efficient and readable and allows you to take advantage of modern JavaScript features like Arrow Functions, Destructuring, Template literals, Import and Exports, Spread and Rest Operators
    * Imports and Exports:- ES6 introduced `import` and `export` statements for module management. React components and other JavaScript modules are commonly organized and imported/exported using ES6 module syntax.
 *  Additionally, many of the tools and libraries commonly used with React, such as Babel, Webpack,ESLint, Prettier, React Router, Redux, Axios/Fetch, Jest/Testing Library and more are configured to work seamlessly with ES6 syntax.

* Q3:- {TitleComponent} vs * { <TitleComponent/> } vs 8 { <TitleComponent></TitleComponent> } in JSX?
  * A3:- The Difference is stated below:

  * {TitleComponent}: This value describes the TitleComponent as a javascript expression or a variable. The {} can embed a javascript expression or a variable inside it.
  * <TitleComponent/> : This value represents a Component that is basically returning Some JSX value. In simple terms TitleComponent a function that is returning a JSX value. A component is written inside the {<  />} expression.
  * <TitleComponent></TitleComponent> : <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent only when < TitleComponent /> has no child components. The opening and closing tags are created to include the child components.
  * <TitleComponent>
    * <FirstChildComponent />
    * <SecondChildComponent />
    * <ThirdChildComponent />
  * </TitleComponent>

* Q4:- How can I write comments in JSX?
  * A4: In JSX, comments should be wrapped in curly braces {} and use JavaScript-style comments (// for single-line comments and /* */ for multi-line comments). 
  e.g. {/*
          * This is a multi-line comment.
          * It provides more extensive information about the code.
      */}

* Q5:- What isr <React.Fragment></React.Fragment> and <></> ?
  * A5:- <Fragment>, often used via <>...</> syntax, lets you group elements without a wrapper node.
    <>
      * <OneChild/>
      * <AnotherChild/>
    </>

  * Wrap elements in <Fragment> to group them together in situations where you need a single element. Grouping elements in Fragment has no effect on the resulting DOM; it is the same as if the elements were not grouped. The empty JSX tag <></> is shorthand for <Fragment></Fragment> in most cases.

  * For example, a component can only return one element, but by using a Fragment you can group multiple elements together and then return them as a group:

  * const App = () => {
    return (
        <>
         * <Header/>
         * <Main/>
         * <Footer/>
        </>
    )
  }

* Q6:- What is Virtual DOM?
  * A6:- * THE VIRTUAL DOM
   React uses Virtual DOM, which can be thought of as a blueprint of the actual DOM. When any changes are made to React elements, the Virtual DOM is updated. The Virtual DOM finds the differences between it and the DOM and re-renders only the elements in the DOM that changed. This makes the Virtual DOM faster and more efficient than updating the entire DOM.
   * Q:- What exactly is the VIRTUAL DOM ? 
   * A:- Virtual DOM is a React Element. React treats react element as a javascript object. This object is basically react virtual DOM.
   React Element: React.createElement("h1", {id:"heading"}, "This is a heading");

* Q7:- What is Reconciliation in React?
  * A7:- In React, the DIFFING algorithm, or RECONCILIATION algorithm, is used to efficiently update the DOM. It compares the new Virtual DOM with the previous one, identifies differences or diffs between them, and updates only the necessary parts of the actual DOM to optimize performancE. 
  * The goal of reconciliation is to minimize the actual updates made to the real DOM by only applying changes where necessary.  React determines which parts of the virtual DOM have changed and optimizes the update process to reduce rendering and layout calculations, thus improving performance. It keeps the UI layer and data layer in sync.

  * Layout Calculations: 
    * Layout calculations, in web development, refer to the process where a web browser determines the size, position, and flow of elements on a web page based on their content, styles, and structure.

    * Reconciliation: https://github.com/acdlite/react-fiber-architecture

* Q8. What is React Fiber?
  * A8:- React Fiber is the new reconciliation engine in React 16. The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

* Q9:- Why do we need key in React ? When do we need keys in React ?
  * A9:- 
  * - Keys allow React to identify which items in a list have changed, been added, or removed. This enables React to update only the necessary parts of the UI, making updates more efficient.
    -  Keys provide stable identities to list items, which is crucial for animations or transitions. React can track items even if they move or change position in the list.
  * We need keys in React when rendering dynamic lists of items. Keys are essential for optimizing updates, maintaining component state, and enabling smoother animations in cases where the list items change or are re-ordered."
  
  * React optimizes its render cycle. When there are components at the same level, so these components need to have unique id.
  Suppose there is a new component which came in at the first place. So what happens is React will have to insert this new component at the first place and there is no unique id so react will have to re-render all components because react does not know which component is new, it treats every component same. Basically reacts clean all the container of components and re-render again.
  But if we give unique id, and a new components come
  with id:"xyz" and there is already id: 1, 2, 3, so the new component has come at the first place as id:"xyz", it will just render one component here, it will not render all other components.

* Q10: Can we use index as a Key. 
  * A:- Yes, you can use the index as a key in React, but it's generally not recommended. While it may work in some cases, it can lead to issues with component state, performance, and stability. 

  * AVOID USING INDEX AS KEY
    * Using index as a key in React is generally considered bad practice when rendering lists of elements, especially when the list can change dynamically.
    * USING INDEX AS A KEY CAN LEAD TO INCORRECT RENDERING AND PERFORMANCE ISSUES.
    * When you use the index of an element as its key in React, it can cause problems in situations where the list items can change or be reordered. React relies on keys to efficiently update and re-render components when the underlying data changes. Using index as a key doesn't provide a stable and reliable way for React to track elements, which can lead to incorrect rendering and decreased performance.
  * IF YOU DO NOT HAVE UNIQUE ID, THEN USE INDEX. USE INDEX AS A LAST RESORT. It is better when you are not using keys.
  * UNIQUE ID >>>>>>>>>>>> INDEX

* Q11:- What is config-driven UI?
  * A:- A "config-driven UI" is a user interface that is built and configured using a declarative configuration file or data structure, rather than being hardcoded. The configuration file or data structure typically contains information about the structure of the UI, such as the layout of the elements, the properties and behaviors of each element, and any data sources or APIs that the UI interacts with.
  * Using a config-driven UI approach, the UI can be easily modified and customized without requiring changes to the underlying codebase. This makes it easier to maintain, extend, and scale the UI, and also allows for more rapid development and iteration.
  * React: React provides a flexible and powerful way to build UIs using a component-based architecture, which can be easily configured using props and state. With React, it's common to use configuration data to control the rendering of components and to customize their behavior.* * JSON Forms: JSON Forms is a UI library for rendering JSON schemas in React, Angular, and Vue. It allows developers to define a UI schema that describes the layout of the form, and a JSON schema that defines the structure of the data. The library then automatically generates a UI based on the schema definitions.

* Q12. What are props in React ? Ways to use props ?
  * A12:- Props (properties) passed in Component are similar to the arguments passed in a js function call and received by that function as parameters.

  * Every parent component can pass some information to its child components by giving them props. Props are similar to HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

  * Passing Props to Component - props are the only argument to your component. React component functions accept a single argument, a props object.

   * One Way:-
    * Ways to pass props to one component:-
      *Add props to the JSX, just like you would with HTML attributes.
      * <RestaurantCard resName="Burger King" location="Delhi"/>
    * Ways to receive props in another component.
    	* const Profile = (props) => {
            * return (
                * <h1>Restaurant Name: {props.resName}</h1>
                * <h2>Location: {props.location}</h2>
            )
        }

   * second way:-
    * Ways to pass props to one component:-
      * <RestaurantCard resName="Burger King" location="Delhi"/>
    * Ways to receive props in another component using Destructuring
    	* const Profile = ({resName, location}) => {
            * return (
                * <h1>Restaurant Name: {resName}</h1>
                * <h2>Location: {location}</h2>
            )
        } 

   * Third Way:-
     * Ways to pass props to one component:-
      *Add props to the JSX, just like you would with HTML attributes.
      * <RestaurantCard resName="Burger King" location="Delhi"/>
     * Ways to receive props in another component.
    	* const Profile = (props) => {
            * const { resName, location} = props;
            * return (
                * <h1>Restaurant Name: {resName}</h1>
                * <h2>Location: {location}</h2>
            )
        }
    
    * You can also pass props to component using spread syntax:-
     * <RestaurantCard {...props}/>