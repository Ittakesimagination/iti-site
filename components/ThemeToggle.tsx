"use client";
import { useThemeStore } from "@/lib/store/theme";
import { Switch } from "@headlessui/react";

export default function ThemeToggle() {
  const mode = useThemeStore((s) => s.mode);
  const toggle = useThemeStore((s) => s.toggle);

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm">{mode === "dark" ? "Dark" : "Light"} mode</span>
      <Switch
        checked={mode === "dark"}
        onChange={toggle}
        className="group inline-flex h-6 w-11 items-center rounded-full bg-neutral-300 dark:bg-neutral-700 transition"
        aria-label="Toggle color theme"
      >
        <span className="inline-block h-4 w-4 translate-x-1 rounded-full bg-white group-data-[checked]:translate-x-6 transition" />
      </Switch>
    </div>
  );
}
