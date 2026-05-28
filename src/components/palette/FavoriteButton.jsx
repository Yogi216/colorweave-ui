<<<<<<< HEAD
// import useFavorites from "../../hooks/useFavorites";
// import { useToast } from "../../context/ToastContext";

// export default function FavoriteButton({ palette }) {
//   const { toggleFavorite, isFavorite } = useFavorites();
//   const active = isFavorite(palette.id);
//   const { showToast } = useToast();

//   const handleClick = async () => {
//     await toggleFavorite(palette);

//     showToast({
//       type: active ? "warning" : "success",
//       title: active ? "Removed" : "Saved",
//       message: active
//         ? "Palette removed from favorites"
//         : "Palette added to favorites",
//     });
//   };

//   return (
//     <button
//       className={`favorite-btn soft-button ${active ? "fav-active" : ""}`}
//       onClick={handleClick}
//     >
//       {active ? "♥ Saved" : "♡ Save"}
//     </button>
//   );
// }

=======
>>>>>>> 9e51304b830b979c32a18e9432f1b6315eaf8ae9
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 9e51304b830b979c32a18e9432f1b6315eaf8ae9
