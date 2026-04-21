import { useDeferredValue, useMemo, useState, useCallback } from "react";
import PageWrapper from "../components/layout/PageWrapper";
import SearchBar from "../components/common/SearchBar";
import FilterChips from "../components/palette/FilterChips";
import SortTabs from "../components/palette/SortTabs";
import PaletteGrid from "../components/palette/PaletteGrid";
import EmptyState from "../components/common/EmptyState";
import { palettes } from "../data/palettes";
import { categories } from "../data/categories";
import { filterPalettes } from "../utils/filterPalettes";
import { sortPalettes } from "../utils/sortPalettes";

export default function Explore() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("new");

  // Makes typing feel smoother when filtering big lists
  const deferredSearchTerm = useDeferredValue(searchTerm);

  const handleSearchChange = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  const handleCategoryChange = useCallback((value) => {
    setActiveCategory(value);
  }, []);

  const handleSortChange = useCallback((value) => {
    setSortBy(value);
  }, []);

  const visiblePalettes = useMemo(() => {
    const filtered = filterPalettes(
      palettes,
      deferredSearchTerm,
      activeCategory,
    );
    return sortPalettes(filtered, sortBy);
  }, [deferredSearchTerm, activeCategory, sortBy]);

  return (
    <PageWrapper
      title="Explore Palettes"
      subtitle="Search, filter, and collect modern color combinations."
    >
      <div className="explore-controls">
        <SearchBar value={searchTerm} onChange={handleSearchChange} />
        <FilterChips
          items={categories}
          activeItem={activeCategory}
          onChange={handleCategoryChange}
        />
        <SortTabs sortBy={sortBy} onChange={handleSortChange} />
      </div>

      {visiblePalettes.length > 0 ? (
        <PaletteGrid palettes={visiblePalettes} />
      ) : (
        <EmptyState
          title="No palettes found"
          message="Try another search word or switch the active filter chip."
        />
      )}
    </PageWrapper>
  );
}
