import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useToast } from "./ToastContext";
import {
  addFavorite,
  getUserFavorites,
  removeFavorite,
} from "../services/paletteService";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const { user } = useContext(AuthContext);
  const { showToast } = useToast();

  const [favorites, setFavorites] = useState([]);
  const [loadingFavorites, setLoadingFavorites] = useState(false);

  useEffect(() => {
    async function loadFavorites() {
      if (!user) {
        setFavorites([]);
        return;
      }

      try {
        setLoadingFavorites(true);
        const data = await getUserFavorites(user.id);
        setFavorites(data);
      } catch (error) {
        console.error("Failed to load favorites:", error.message);

        showToast({
          type: "error",
          title: "Load Failed",
          message: "Unable to load favorites",
        });
      } finally {
        setLoadingFavorites(false);
      }
    }

    loadFavorites();
  }, [user, showToast]);

  const toggleFavorite = async (palette) => {
    if (!user) {
      showToast({
        type: "warning",
        title: "Login Required",
        message: "Please log in to save favorites",
      });
      return;
    }

    const exists = favorites.some((item) => item.id === palette.id);

    try {
      if (exists) {
        await removeFavorite(user.id, palette.id);

        setFavorites((prev) => prev.filter((item) => item.id !== palette.id));

        showToast({
          type: "warning",
          title: "Removed",
          message: "Palette removed from favorites",
        });
      } else {
        await addFavorite(user.id, palette);

        setFavorites((prev) => {
          const alreadyExists = prev.some((item) => item.id === palette.id);

          if (alreadyExists) return prev;

          return [palette, ...prev];
        });

        showToast({
          type: "success",
          title: "Saved",
          message: "Palette added to favorites",
        });
      }
    } catch (error) {
      console.error("Favorite action failed:", error.message);

      showToast({
        type: "error",
        title: "Action Failed",
        message: "Something went wrong while updating favorites",
      });
    }
  };

  const isFavorite = (id) => favorites.some((item) => item.id === id);

  const value = useMemo(
    () => ({
      favorites,
      loadingFavorites,
      toggleFavorite,
      isFavorite,
    }),
    [favorites, loadingFavorites],
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
