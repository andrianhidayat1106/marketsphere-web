import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/HomePage.jsx";
import Login from "../pages/Auth/LoginPage.jsx";
import Register from "../pages/Auth/RegisterPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
