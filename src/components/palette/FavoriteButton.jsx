import useFavorites from "../../hooks/useFavorites";

export default function FavoriteButton({ palette }) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const active = isFavorite(palette.id);

  const handleClick = async () => {
    await toggleFavorite(palette);
  };

  return (
    <button
      className={`favorite-btn soft-button ${active ? "fav-active" : ""}`}
      onClick={handleClick}
    >
      {active ? "♥ Saved" : "♡ Save"}
    </button>
  );
}
