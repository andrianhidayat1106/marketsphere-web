import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/home/HomePage.jsx";
import LoginPage from "../pages/auth/LoginPage.jsx";
import DashboardPage from "../pages/dashboard/DashboardPage.jsx";
import RegisterPage from "../pages/auth/RegisterPage.jsx";
import ProfilePage from "../pages/user/profile/ProfilePage.jsx";
import ChangePasswordPage from "../pages/user/profile/ChangePasswordPage.jsx";
import FormAddress from "../pages/user/profile/FormAddressPage.jsx";
import RecentOrdersPage from "../pages/user/profile/RecentOrdersPage.jsx";
import ChatPage from "../pages/user/chat/ChatPage.jsx";
import NotificationPage from "../pages/user/notification/NotificationPage.jsx";
import CartPage from "../pages/cart/CartPage.jsx";

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
  {
    path: "/profile/recent-orders",
    element: <RecentOrdersPage />,
  },
  {
    path: "/chat",
    element: <ChatPage />,
  },
  {
    path: "/notification",
    element: <NotificationPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

export default router;
