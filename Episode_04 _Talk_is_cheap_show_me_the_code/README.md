# EPISODE 04 - TALK IS CHEAP, SHOW ME THE CODE

* Q. WHY WE NEED KEYS?
  * A. React optimizes its render cycle. When there are components at the same level, so these components need to have unique id.
  Suppose there is a new component which came in at the first place. So what happens is React will have to insert this new component at the first place and there is no unique id so react will have to re-render all components because react does not know which component is new, it treats every component same. Basically reacts clean all the container of components and re-render again.
  But if we give unique id, and a new components come
  with id:"xyz" and there is already id: 1, 2, 3, so the new component has come at the first place as id:"xyz", it will just render one component here, it will not render all other components. 
  * AVOID USING INDEX AS KEY
    * Using index as a key in React is generally considered bad practice when rendering lists of elements, especially when the list can change dynamically.
    * USING INDEX AS A KEY CAN LEAD TO INCORRECT RENDERING AND PERFORMANCE ISSUES.
    * When you use the index of an element as its key in React, it can cause problems in situations where the list items can change or be reordered. React relies on keys to efficiently update and re-render components when the underlying data changes. Using index as a key doesn't provide a stable and reliable way for React to track elements, which can lead to incorrect rendering and decreased performance.
  * IF YOU DO NOT HAVE UNIQUE ID, THEN USE INDEX. USE INDEX AS A LAST RESORT. It is better when you are not using keys.
  * UNIQUE ID >>>>>>>>>>>> INDEX
 