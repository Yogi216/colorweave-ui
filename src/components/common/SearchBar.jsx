export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-shell glass-panel">
      <span className="search-icon">⌕</span>
      <input
        type="text"
        placeholder="Search by title, category, or hex..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
      />
    </div>
  );
}
