import PageWrapper from "../components/layout/PageWrapper";
import PaletteGrid from "../components/palette/PaletteGrid";
import EmptyState from "../components/common/EmptyState";
import useFavorites from "../hooks/useFavorites";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <PageWrapper
      title="Favorites"
      subtitle="Your saved palettes live here, ready for the next design sprint."
    >
      {favorites.length ? (
        <PaletteGrid palettes={favorites} />
      ) : (
        <EmptyState
          title="No favorites saved"
          message="Tap the save button on a palette card and it will appear here."
        />
      )}
    </PageWrapper>
  );
}
