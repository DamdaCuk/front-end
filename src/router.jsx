import { createBrowserRouter } from "react-router-dom";
import { OutletContainer } from "./OutletContainer";
import LoginPage from "./pages/loginPage/LoginPage";
import HomePage from "./pages/homePage/HomePage";

export default createBrowserRouter([
  {
    path: "/",
    element: <OutletContainer />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
