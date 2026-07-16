import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

/**
 * MainLayout — Layout utama untuk halaman publik.
 *
 * Kapan dipakai:
 * Halaman yang butuh Navbar di atas + Footer di bawah.
 * Contoh: HomePage, CartPage, ProductList, ProfilePage, dll.
 *
 * Kenapa dibuat:
 * Supaya setiap halaman tidak perlu import & render <Navbar/> dan <Footer/>
 * secara manual. Cukup definisikan di router sekali, semua child route otomatis
 * dapat layout ini.
 */
export default function MainLayout() {
  return (
    <>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
