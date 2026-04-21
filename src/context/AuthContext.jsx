import { createContext, useEffect, useMemo, useState } from "react";
import {
  createUserProfile,
  getCurrentSession,
  signInWithEmail,
  signOutUser,
  signUpWithEmail,
} from "../services/authService";
import { supabase, hasSupabaseEnv } from "../services/supabase";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function initAuth() {
      try {
        if (!hasSupabaseEnv || !supabase) {
          setLoading(false);
          return;
        }

        const session = await getCurrentSession();

        if (!ignore) {
          setUser(session?.user ?? null);
          setLoading(false);
        }

        if (session?.user) {
          createUserProfile(session.user).catch((err) => {
            console.error("Profile sync failed:", err.message);
          });
        }
      } catch (error) {
        console.error("Auth init failed:", error.message);
        if (!ignore) {
          setAuthError(error.message);
          setLoading(false);
        }
      }
    }

    initAuth();

    if (!hasSupabaseEnv || !supabase) return;

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);

      if (event === "SIGNED_IN" && session?.user) {
        createUserProfile(session.user).catch((err) => {
          console.error("Profile creation failed:", err.message);
        });
      }
    });

    return () => {
      ignore = true;
      subscription?.unsubscribe();
    };
  }, []);

  const login = async ({ email, password }) => {
    setAuthError("");
    const data = await signInWithEmail({ email, password });
    setUser(data?.user ?? null);
    return data?.user ?? null;
  };

  const signup = async ({ name, email, password }) => {
    setAuthError("");
    const data = await signUpWithEmail({ name, email, password });
    setUser(data?.user ?? null);
    return data?.user ?? null;
  };

  const logout = async () => {
    try {
      await signOutUser();
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error.message);
      setAuthError(error.message);
    }
  };

  const value = useMemo(
    () => ({
      user,
      loading,
      authError,
      login,
      signup,
      logout,
    }),
    [user, loading, authError],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
