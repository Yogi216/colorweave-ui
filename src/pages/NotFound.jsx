import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="container not-found-page">
      <div className="glass-panel not-found-card">
        <h1>404</h1>
        <p>The page wandered off into the color fog.</p>
        <Link to="/" className="primary-btn">
          Back Home
        </Link>
      </div>
    </section>
  );
}
