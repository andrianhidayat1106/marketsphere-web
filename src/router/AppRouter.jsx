import { createBrowserRouter } from "react-router-dom";

// Layout Components
import MainLayout from "../components/layout/MainLayout.jsx";
import AuthLayout from "../components/layout/AuthLayout.jsx";
import MinimalLayout from "../components/layout/MinimalLayout.jsx";

// Page Components
import HomePage from "../pages/home/HomePage.jsx";
import LoginPage from "../pages/auth/LoginPage.jsx";
import RegisterPage from "../pages/auth/RegisterPage.jsx";
import DashboardPage from "../pages/dashboard/DashboardPage.jsx";
import ProfilePage from "../pages/user/profile/ProfilePage.jsx";
import ChangePasswordPage from "../pages/user/profile/ChangePasswordPage.jsx";
import FormAddressPage from "../pages/user/profile/FormAddressPage.jsx";
import RecentOrdersPage from "../pages/user/profile/RecentOrdersPage.jsx";
import ChatPage from "../pages/user/chat/ChatPage.jsx";
import NotificationPage from "../pages/user/notification/NotificationPage.jsx";
import CartPage from "../pages/cart/CartPage.jsx";
import ListProductPage from "../pages/product/listProduct/ListProductPage.jsx";
import DetailProductPage from "../pages/product/detailProduct/DetailProduct.jsx";
import FlashSalePage from "../pages/home/flash-sale/FlashSalePage.jsx";
import PaymentPage from "../pages/payment/PaymentPage.jsx";
import PaymentSuccessPage from "../pages/payment/PaymentSuccessPage.jsx";
import OrderTrackingPage from "../pages/payment/OrderTrackingPage.jsx";
import StoreRegisterPage from "../pages/store/StoreRegisterPage.jsx";
import StoreRegisterSuccessPage from "../pages/store/StoreRegisterSuccessPage.jsx";
import StorePage from "../pages/store/StorePage.jsx";
import StoreIdentityVerification from "../pages/store/StoreIdentityVerification.jsx";

/**
 * ROUTER STRUCTURE
 *
 * Menggunakan nested routes supaya layout tidak perlu di-import manual
 * di setiap halaman. Cukup definisikan layout sebagai parent route,
 * semua children otomatis dapat layout tersebut.
 *
 * 3 jenis Layout:
 * 1. MainLayout     → Navbar + Footer (halaman umum)
 * 2. AuthLayout     → Tanpa Navbar/Footer (login/register)
 * 3. MinimalLayout  → Logo header + copyright footer (payment, store register)
 *
 * Halaman yang punya layout sendiri (tidak pakai parent layout):
 * - ChatPage       → full-screen chat, tidak butuh Navbar/Footer
 * - DashboardPage  → punya sidebar sendiri
 * - StorePage      → punya custom navbar toko
 */
const router = createBrowserRouter([
  // ─── Halaman dengan MainLayout (Navbar + Footer) ───
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ListProductPage /> },
      { path: "/products/:id", element: <DetailProductPage /> },
      { path: "/flash-sale", element: <FlashSalePage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/notification", element: <NotificationPage /> },
      { path: "/orders/:id/tracking", element: <OrderTrackingPage /> },

      // Profile sub-routes
      { path: "/profile", element: <ProfilePage /> },
      { path: "/profile/change-password", element: <ChangePasswordPage /> },
      { path: "/profile/address/new", element: <FormAddressPage /> },
      { path: "/profile/orders", element: <RecentOrdersPage /> },
    ],
  },

  // ─── Halaman Auth (tanpa Navbar/Footer) ───
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },

  // ─── Halaman dengan MinimalLayout (logo + copyright) ───
  {
    element: <MinimalLayout />,
    children: [
      { path: "/payment", element: <PaymentPage /> },
      { path: "/payment/success", element: <PaymentSuccessPage /> },
      { path: "/store/register", element: <StoreRegisterPage /> },
      { path: "/store/register/identity-verification", element: <StoreIdentityVerification /> },
      { path: "/store/register/success", element: <StoreRegisterSuccessPage /> },
    ],
  },

  // ─── Halaman dengan layout sendiri ───
  { path: "/chat", element: <ChatPage /> },
  { path: "/dashboard", element: <DashboardPage /> },
  { path: "/store/:slug", element: <StorePage /> },
]);

export default router;
