import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUsername] = useState();

  useEffect(() => {
    // from api we got response as below
    const data = { userName: "Shaffi Khan" };
    setUsername(data.userName);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUsername }}>
        <div className="app">
          <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}>
            <Header />
          </UserContext.Provider>
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "restaurant/:resId",
        element: <Restaurant />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading grocery app....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
