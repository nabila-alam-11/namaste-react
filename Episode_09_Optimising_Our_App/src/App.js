import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Search from "../src/components/Search";
import Offers from "../src/components/Offers";
import Help from "../src/components/Help";
import SignIn from "../src/components/SignIn";
import Cart from "../src/components/Cart";
import Error from "../src/components/Error"
import RestaurantMenu from "../src/components/RestaurantMenu";
import "../style.css";
import { RouterProvider, createBrowserRouter, Outlet} from "react-router-dom";
import { lazy, Suspense } from "react";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
};
const Grocery = lazy(() => import("./components/Grocery"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main/>
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path:"/grocery",
        element: <Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      }
    ],
    errorElement: <Error/>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
