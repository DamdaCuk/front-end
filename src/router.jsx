import { createBrowserRouter } from "react-router-dom";
import { OutletContainer } from "./OutletContainer";
import LoginPage from "./pages/loginPage/LoginPage";
import HomePage from "./pages/homePage/HomePage";
import SearchHomePage from "./pages/searchHomePage/SearchHomePage";
import ContentPage from "./pages/contentPage/ContentPage";

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
        path: "/:homeId",
        element: <HomePage />,
      },
      {
        path: "/search/home",
        element: <SearchHomePage />,
      },
      {
        path: "/content/:category",
        element: <ContentPage />,
      },
    ],
  },
]);
