# EPISODE 07 - FINDING THE PATH

# ROUTING

* useEffect Hook:
  * we import it from react library.
  * useEffect is called using two arguments -
    call back function and a dependency array.
  * When this hook called? useEffect is called after every render of that component. But dependency array changes the behaviour of its render.
  * if there is no dependency array useEffect is called on every render.
  * if there is an empty dependency array [] useEffect is called on  initial render just once.
  * The default nature of useEffect hook is to called on every render but if we give an empty dependency array the behaviour of its render changes, and it will called on initial render just once.
  * But what if we put something in dependency array? Then it will only be called when the dependency changes. [filteredRestaurant]
  * if dependency array is [filteredRestaurant], then useEffect hook called every time  filteredRestaurant is updated.

* useState Hook:
  * never create useState hook outside the component.
  * try to use on the top.
  * never create an useState hook inside a conditional statements, loop.

* ROUTING
  * React Router Library
  * New version 6.16.0
  * npm i react-router-dom
  * Routing Configuration- createBrowserRouter 
  * Now we need to provide this configuration to render it.
   - RouterProvider(component) - this router provider provides routing configuration to our App 
  * Error: errorElement
  * React Router DOM gives us an access to an important hook - useRouteError
  * Children Routes: configuration - children: []
  * Outlet: Outlet is a component: Outlet will be filled with children according to path on what page we are.
  * Outlet replaced
  * Link(component)
   - When you are using React don't use anchor tag, because when we go to different page , the whole page get refreshed.
   - Using Link we can navigate to a different page, without re-loading the whole page.
   - Link is a super powers which are given to us by react-router-dom

* SINGLE PAGE APPLICATION
* TWO TYPES OF ROUTING IN YOUR WEB APPLICATION
  - Client side routing
  - Server side routing

* DYNAMIC ROUTING:-
  * useParams hook