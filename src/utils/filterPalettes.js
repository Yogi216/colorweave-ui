export function filterPalettes(palettes, searchTerm, activeCategory) {
  const term = searchTerm.trim().toLowerCase();

  return palettes.filter((palette) => {
    const matchesCategory =
      activeCategory === "All" || palette.category === activeCategory;

    if (!matchesCategory) return false;
    if (!term) return true;

    return (
      palette.title.toLowerCase().includes(term) ||
      palette.category.toLowerCase().includes(term) ||
      palette.colors.some((color) => color.toLowerCase().includes(term))
    );
  });
}
