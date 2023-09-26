# EPISODE 06 - EXPLORING THE WORLD

* Monolith Architecture
  - A monolithic architecture is a software design approach where an entire application is built as a single, tightly interconnected unit. All components, such as user interfaces, APIs, Authentication, SMS and databases, are part of one codebase and run together. This can make scaling, maintenance, and development more challenging.

* Microservices Architecture
  - Microservices architecture is a software design approach where an application is composed of a collection of small, independent services that communicate with each other through well-defined APIs (Application Programming Interfaces). Each service in a microservices architecture is designed to perform a specific, standalone function, and they can be developed, deployed, and scaled independently.Services like authentication service, payment service, user service, order service, notification service and many more. 
  * Separation  of concerns: 
Separation of concerns in microservices means breaking a big software project into smaller parts, each doing a specific job. This makes it easier to develop, update, and scale the software, with different teams working on different parts.
  * single responsibility principle
   Each React component should ideally have a single responsibility, which means it should focus on rendering a specific part of the user interface and managing the logic related to that part. This makes React applications more maintainable and easier to understand. Following SRP in React helps create reusable and composable components that can be efficiently maintained and tested.
  * How these services talk to each other?
  * How these services can be deployed and how can we access these services?
   All services run on their specific port.
   e.g. port :1234 - UI service
        port :1000 - Backend service
        port :3000 - SMS service
        port :5147 - Auth service
    and all these ports mapped to domain name.
    e.g. /api, /sms, /products, /auth
    suppose if UI wants to connect to backend , it will call to "/api" or call a different port. That's how they interact with each other.

* ** Two ways of fetching data from API.
  1. Component Mounting(page load) => API call => Render with data
    * In this approach, when the page loads, you make an API call, typically by using a `useEffect` hook with an empty dependency array.This ensures that the API call is made only once when the component is mounted, and  then you render the component with the data
  2. Second Approach: Page Load => Render => API Call => Render Again
    * in this approach, the component is initially render without any data. The component is rendered , and any placeholders or loading indicators can be displayed. After the initial render, you make an API call immediately, typically in a `useEffect` without any dependencies, so it runs after every render. After the API call completes, the component will re-render with the fetched data. This approach can be useful if you want to show the initial state of your component and update it with data when it becomes available.
  * Second approach >>>>>> First approach

  * React is the one of the best mechanism.




* In this episode will we learn how React UI service talk to different services outside of this UI world. How will a react application make a backend api call and fetch the data.
  *Optional chaining?
  * Shimmer UI