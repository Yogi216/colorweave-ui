import { palettes } from "../data/palettes";
import { supabase, hasSupabaseEnv } from "./supabase";

export async function getPalettes() {
  return Promise.resolve(palettes);
}

export async function getUserFavorites(userId) {
  if (!hasSupabaseEnv || !supabase) return [];

  const { data, error } = await supabase
    .from("favorites")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data.map((item) => ({
    id: item.palette_id,
    title: item.palette_title,
    category: item.category,
    likes: item.likes,
    colors: item.colors,
    createdAt: item.created_at,
  }));
}

export async function addFavorite(userId, palette) {
  if (!hasSupabaseEnv || !supabase) {
    throw new Error("Supabase is not configured.");
  }

  const payload = {
    user_id: userId,
    palette_id: palette.id,
    palette_title: palette.title,
    category: palette.category,
    likes: palette.likes,
    colors: palette.colors,
  };

  const { error } = await supabase.from("favorites").upsert(payload, {
    onConflict: "user_id,palette_id",
  });

  if (error) throw error;
}

export async function removeFavorite(userId, paletteId) {
  if (!hasSupabaseEnv || !supabase) {
    throw new Error("Supabase is not configured.");
  }

  const { error } = await supabase
    .from("favorites")
    .delete()
    .eq("user_id", userId)
    .eq("palette_id", paletteId);

  if (error) throw error;
}
