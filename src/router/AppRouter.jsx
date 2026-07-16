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
import ListProductPage from "../pages/product/listProduct/ListProductPage.jsx";
import DetailProduct from "../pages/product/detailProduct/DetailProduct.jsx";
import FlashSalePage from "../pages/home/flash-sale/FlashSalePage.jsx";
import PaymentSuccessPage from "../pages/payment/PaymentSuccessPage.jsx";
import PaymentPage from "../pages/payment/PaymentPage.jsx";
import OrderTrackingPage from "../pages/payment/OrderTrackingPage.jsx";
import StoreRegisterPage from "../pages/store/StoreRegisterPage.jsx";
import StoreRegisterSuccessPage from "../pages/store/StoreRegisterSuccessPage.jsx";
import StorePage from "../pages/store/StorePage.jsx";
import StoreIdentityVerification from "../pages/store/StoreIdentityVerification.jsx";

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
  {
    path: "/product-list",
    element: <ListProductPage />,
  },
  {
    path: "/product-detail",
    element: <DetailProduct />,
  },
  {
    path: "/flash-sale",
    element: <FlashSalePage />,
  },
  {
    path: "/order-tracking",
    element: <OrderTrackingPage />,
  },
  {
    path: "/payment",
    element: <PaymentPage />,
  },
  {
    path: "/payment-success",
    element: <PaymentSuccessPage />,
  },
  {
    path: "/store/register",
    element: <StoreRegisterPage />,
  },
  {
    path: "/store/register/success",
    element: <StoreRegisterSuccessPage />,
  },
  {
    path: "/store",
    element: <StorePage />,
  },
  {
    path: "/store/register/ientity-verification",
    element: <StoreIdentityVerification />,
  },
]);

export default router;
