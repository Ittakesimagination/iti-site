import { create } from "zustand";

type ThemeMode = "light" | "dark";

interface ThemeState {
  mode: ThemeMode;
  setMode: (m: ThemeMode) => void;
  toggle: () => void;
}

/** Zustand store for theme mode; syncs to <html>.dark */
export const useThemeStore = create<ThemeState>((set, get) => ({
  mode: "light",
  setMode: (m) => {
    set({ mode: m });
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", m === "dark");
    }
  },
  toggle: () => {
    const next = get().mode === "dark" ? "light" : "dark";
    get().setMode(next);
  }
}));
