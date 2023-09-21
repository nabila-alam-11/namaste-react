# EPISODE 05 - LET'S GET HOOKED

* Q1:- What is the difference between Named Export, Default export and * as export?
  A1:- Import & Export Modules are ES6 features that allows us to write reusable js code (modules), which when exported, allowing other modules to use it by importing.

 * Named Export : Placing the keyword export before the component/variable/object/module anything that you want to export. There can be more than one named component in a file. While importing the Component name must be enclosed within {}.

Example : In constant.js file, there is one named export RES_IMG_CDN_URL.

While importing RES_IMG_CDN_URL in RestaurantCard.js file, import {RES_IMG_CDN_URL} from "../constant";

Default Export : Each component file can have only one export default. While importing just the Component name can be used (without any {})

Example : Check Main.js file inside components in this chapter. Main component is exported using export default Body;

In the App.js file, while importing import Main from "./components/Main";


import * as It is useful when we import all the components/modules functions as namespace object which contains all exports as properties. Those exported components can be accessed by Module.component name

If all the components in the module are exported then using import * as namespace can be used to import all those components.

Example : Check Header.js file inside components in this chapter. There are three components exported.

In app.js, while importing use import * as MainHeader from './components/Header' . <MainHeader.Header></MainHeader.Header> is used to render Header Component in AppLayout Component.


* Q2:- What is the importance of constant.js file?
  A2:- config.js file can be used to store the hardcoded values in one file, so that when the value needs to be modified, it can be easy to do the modification in one file.

 Example : All API Base URLs, CDN links, config data from backend, default values needed in the app are could be placed in config.js file.

* Q3:- What are React Hooks?
  A3:- React Hooks are new addition to React from React 16.8 version. Earlier, state and other component features could be handled only using Class Components. But with version 16.8, React introduced a new pattern called Hooks. With React Hooks, we can use state, and other React features, in a functional component empowering functional programming in React.

  * Hooks are JavaScript functions that manage the state's behaviour and side effects by isolating them from a component.

  * React provides a bunch of standard in-built hooks like useState(), useEffect(), useContext(), useReducer(), useCallback, useMemo(), useRef(), useLayoutEffect(), useDebugValue() and other additional hooks.

* Q4:- Why do we need useState() hook?
  A4:- 
     * The useState() hook is crucial for managing state within React functional components. State represents data that changes over time,such as user input or data fetched from an API. It's essential because it allows components to be interactive and dynamic.

     * In modern React, functional components have become the preferred way to build UI components. Before hooks were introduced, class components were used for state management. useState() empowers functional components to manage state effectively, making code simpler and more readable.

     * ***Imp:- When state changes using useState(), React automatically re-renders the component. This reactivity ensures that the user interface stays in sync with the underlying data. Without state management, components would not respond to changes, leading to a static and unresponsive UI.

     * Using useState() is straightforward. You declare a state variable and a function to update it within the component's function body. This simplicity reduces boilerplate code and encourages a more concise and readable codebase.

     * React enforces immutability, ensuring that you cannot directly modify state. Instead, you provide a new value when updating state with useState(). This helps prevent bugs and makes it easier to reason about how data changes over time.

