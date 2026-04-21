import { memo } from "react";

function FilterChips({ items, activeItem, onChange }) {
  return (
    <div className="chip-row glass-panel">
      {items.map((item) => (
        <button
          key={item}
          className={`chip ${activeItem === item ? "chip-active" : ""}`}
          onClick={() => onChange(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default memo(FilterChips);
