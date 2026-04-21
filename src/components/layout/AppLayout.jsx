import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Toast from "../common/Toast";
import ScrollToTop from "../common/ScrollToTop";
import ScrollToTopRoute from "../common/ScrollToTopRoute";

export default function AppLayout() {
  return (
    <div className="site-shell">
      <ScrollToTopRoute />
      <Navbar />
      <main className="app-main">
        <Outlet />
      </main>
      <Toast />
      <ScrollToTop />
      <Footer />
    </div>
  );
}
