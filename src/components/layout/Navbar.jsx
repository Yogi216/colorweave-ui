import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/navLinks";
import ThemeToggle from "../common/ThemeToggle";
import useAuth from "../../hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="site-header">
      <div className="container nav-wrap glass-panel">
        <NavLink to="/" className="brand-mark">
          <span className="brand-dot"></span>
          <span className="brand-text">ColorWeave UI</span>
        </NavLink>

        <nav className="nav-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.to}
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          {user ? (
            <button className="soft-button" onClick={logout}>
              Logout
            </button>
          ) : null}
        </div>
      </div>
    </header>
  );
}
