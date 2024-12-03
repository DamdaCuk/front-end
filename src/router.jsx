import { createBrowserRouter, Navigate } from "react-router-dom";
import { OutletContainer } from "./OutletContainer";
import LoginPage from "./pages/loginPage/LoginPage";
import HomePage from "./pages/homePage/HomePage";
import SearchHomePage from "./pages/searchHomePage/SearchHomePage";
import ContentPage from "./pages/contentPage/ContentPage";
import SearchContentsPage from "./pages/searchContentsPage/SearchContentsPage";
import GuestbookPage from "./pages/guestbookPage/GuestbookPage";
import KnockHomePage from "./pages/knockHomePage/KnockHomePage";
import RegisterHomePage from "./pages/registerHomePage/RegisterHomePage";

export default createBrowserRouter([
  {
    path: "/",
    element: <OutletContainer />,
    children: [
      {
        path: "/",
        element: <Navigate to="/login" replace />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterHomePage />,
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
        path: "/search/home/result",
        element: <KnockHomePage />,
      },
      {
        path: "/contents/:category/:homeId",
        element: <ContentPage />,
      },
      {
        path: "/search/contents/:category",
        element: <SearchContentsPage />,
      },
      {
        path: "/guestbook/:homeId",
        element: <GuestbookPage />,
      },
    ],
  },
]);
