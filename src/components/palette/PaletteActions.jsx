import { useState } from "react";
import FavoriteButton from "./FavoriteButton";
import { copyPalette } from "../../utils/copyPalette";

export default function PaletteActions({ palette }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyPalette(palette.colors);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div className="palette-actions">
      <button className="soft-button" onClick={handleCopy}>
        {copied ? "✓ Copied" : "Copy"}
      </button>
      <FavoriteButton palette={palette} />
    </div>
  );
}
