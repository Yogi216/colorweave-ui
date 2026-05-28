import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-wrap glass-panel">
        <div>
          <h3>ColorWeave UI</h3>
          <p>
            Curated palettes, smooth visuals, and a frosted-glass interface.
          </p>
        </div>

        <div className="footer-links">
          <h3>Legal</h3>

          <Link className="footer-link" to="/privacy-policy">
            Privacy Policy
          </Link>

          <Link className="footer-link" to="/terms-and-conditions">
            Terms & Conditions
          </Link>

          <Link className="footer-link" to="/refund-policy">
            Refund Policy
          </Link>
        </div>
        <p className="footer-copy">
          © 2026 ColorWeave UI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
