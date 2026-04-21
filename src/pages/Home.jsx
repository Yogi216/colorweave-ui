import { Link } from "react-router-dom";
import { palettes } from "../data/palettes";
import PaletteGrid from "../components/palette/PaletteGrid";

export default function Home() {
  const featured = palettes.slice(0, 6);

  return (
    <>
      <section className="hero-section container">
        <div className="hero-card glass-panel">
          <div className="hero-copy">
            <span className="eyebrow">Curated Color Discovery</span>
            <h1>
              Browse palettes with a <span>glass-kissed</span> interface.
            </h1>
            <p>
              Explore soft, modern, handpicked palette combinations with dark
              mode, favorites, and smooth visual filters.
            </p>
            <div className="hero-actions">
              <Link to="/explore" className="hero-btn primary-btn">
                Explore Palettes
              </Link>
              <Link to="/favorites" className="hero-btn secondary-btn">
                View Favorites
              </Link>
            </div>
          </div>

          <div className="hero-preview soft-panel">
            <div className="preview-stack">
              <div style={{ background: "#FDE2F3" }}></div>
              <div style={{ background: "#E5D4FF" }}></div>
              <div style={{ background: "#C9F4AA" }}></div>
              <div style={{ background: "#FFF6BD" }}></div>
            </div>
            <p>Pastel Bloom</p>
          </div>
        </div>
      </section>

      <section className="container section-space">
        <div className="section-head">
          <div>
            <span className="eyebrow">Featured</span>
            <h2>Trending palette picks</h2>
          </div>
          <Link to="/explore" className="inline-link">
            Browse all
          </Link>
        </div>
        <PaletteGrid palettes={featured} />
      </section>

      <section className="container section-space benefits-grid">
        <div className="benefit-card glass-panel">
          <h3>Search Fast</h3>
          <p>Find palettes by title, mood, category, or even hex values.</p>
        </div>
        <div className="benefit-card glass-panel">
          <h3>Save Favorites</h3>
          <p>Keep your top color combinations in a neat personal collection.</p>
        </div>
        <div className="benefit-card glass-panel">
          <h3>Switch Themes</h3>
          <p>Move between bright frost and midnight glow in one tap.</p>
        </div>
      </section>
    </>
  );
}
