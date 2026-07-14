import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/home/HomePage.jsx";
import LoginPage from "../pages/auth/LoginPage.jsx";
import DashboardPage from "../pages/dashboard/DashboardPage.jsx";
import RegisterPage from "../pages/auth/RegisterPage.jsx";
import ProfilePage from "../pages/user/ProfilePage.jsx";
import ChangePasswordPage from "../pages/user/ChangePasswordPage.jsx";
import FormAddress from "../pages/user/FormAddressPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/profile/change-password",
    element: <ChangePasswordPage />,
  },
  {
    path: "/profile/form-address",
    element: <FormAddress />,
  },
]);

export default router;
