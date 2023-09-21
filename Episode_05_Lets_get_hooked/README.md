# EPISODE 05 - LET'S GET HOOKED

# RECONCILIATION ALGORITHM / DIFFING ALGORITHM / REACT FIBER(REACT 16)

 * Reconciliation algorithm is also known as React Fiber.
 * Virtual DOM

 * THE VIRTUAL DOM
   React uses Virtual DOM, which can be thought of as a blueprint of the actual DOM. When any changes are made to React elements, the Virtual DOM is updated. The Virtual DOM finds the differences between it and the DOM and re-renders only the elements in the DOM that changed. This makes the Virtual DOM faster and more efficient than updating the entire DOM.
   * Q:- What exactly is the VIRTUAL DOM ? 
   * A:- Virtual DOM is a React Element. React treats react element as a javascript object. This object is basically react virtual DOM.
   React Element: React.createElement("h1", {id:"heading"}, "This is a heading");

  * In React, the DIFFING algorithm, or RECONCILIATION algorithm, is used to efficiently update the DOM. It compares the new Virtual DOM with the previous one, identifies differences, and updates only the necessary parts of the actual DOM to optimize performancE.

  * Q: WHY REACT IS FAST?
  * A: REACT IS FAST BECAUSE IT IS DOING EFFICIENT DOM MANIPULATION.
  * Q: HOW IT IS DOING EFFICIENT DOM MANIPULATION?
  * A: BECAUSE IT HAS A VIRTUAL DOM. IT HAS A DIFF. ALGORITHM

  * Q: WHY useState() HOOK IS SUPER POWERFUL STATE VARIABLE?
  * A: Because it gives us access to super powerful state variable of react. React keeps an eye on state variables and whenever these variables update React will trigger its diff. algorithm and find out the difference between new virtual dom and old virtual dom and it will auto-magically updates the UI. It keeps the UI layer and data layer in sync.


