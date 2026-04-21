import { memo } from "react";

const tabs = [
  { id: "new", label: "New" },
  { id: "popular", label: "Popular" },
  { id: "az", label: "A-Z" },
];

function SortTabs({ sortBy, onChange }) {
  return (
    <div className="sort-row glass-panel">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`sort-tab ${sortBy === tab.id ? "sort-active" : ""}`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default memo(SortTabs);
