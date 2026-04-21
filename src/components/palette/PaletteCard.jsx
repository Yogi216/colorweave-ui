import PaletteColors from "./PaletteColors";
import PaletteActions from "./PaletteActions";
import { memo } from "react";

function PaletteCard({ palette }) {
  return (
    <article className="palette-card">
      <PaletteColors colors={palette.colors} />

      <div className="palette-card-body">
        <div className="palette-card-meta">
          <div>
            <h3>{palette.title}</h3>
            <p>{palette.category}</p>
          </div>
          <span className="likes-pill">♥ {palette.likes}</span>
        </div>

        <PaletteActions palette={palette} />
      </div>
    </article>
  );
}

export default memo(PaletteCard);
