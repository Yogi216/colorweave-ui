import { supabase, hasSupabaseEnv } from "./supabase";

export async function signUpWithEmail({ email, password, name }) {
  if (!hasSupabaseEnv || !supabase) {
    throw new Error("Supabase environment variables are missing.");
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name },
    },
  });

  if (error) throw error;
  return data;
}

export async function signInWithEmail({ email, password }) {
  if (!hasSupabaseEnv || !supabase) {
    throw new Error("Supabase environment variables are missing.");
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

export async function signOutUser() {
  if (!hasSupabaseEnv || !supabase) return;

  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getCurrentSession() {
  if (!hasSupabaseEnv || !supabase) return null;

  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data.session;
}

export async function createUserProfile(user) {
  if (!hasSupabaseEnv || !supabase || !user) return;

  const profilePayload = {
    id: user.id,
    name: user.user_metadata?.name || user.email?.split("@")[0] || "User",
    email: user.email,
  };

  const { error } = await supabase
    .from("profiles")
    .upsert(profilePayload, { onConflict: "id" });

  if (error) throw error;
}
