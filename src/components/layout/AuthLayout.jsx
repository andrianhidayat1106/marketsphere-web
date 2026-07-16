import { Outlet } from "react-router-dom";

/**
 * AuthLayout — Layout untuk halaman Login & Register.
 *
 * Kapan dipakai:
 * Halaman auth yang full-screen (split left brand + right form).
 * Tidak butuh Navbar/Footer karena user belum login.
 *
 * Kenapa dibuat:
 * Login & Register punya wrapper yang sama (min-h-screen, flex, bg-slate-50).
 * Daripada duplikat di 2 halaman, kita wrap sekali di sini.
 */
export default function AuthLayout() {
  return (
    <div className="min-h-screen w-full flex bg-slate-50 font-sans">
      <Outlet />
    </div>
  );
}
