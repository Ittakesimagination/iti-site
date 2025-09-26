// Minimal, strictly-typed analytics helpers without any `any`

export type EventParams = Record<
  string,
  string | number | boolean | undefined
>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function hasGtag(): boolean {
  return typeof window !== "undefined" && typeof window.gtag === "function";
}

/** Track a custom event */
export function trackEvent(action: string, params?: EventParams) {
  if (!hasGtag()) return;
  // gtag("event", action, params)
  window.gtag!("event", action as unknown as string, params as unknown as object);
}

/** Track a page view */
export function trackPageview(path: string) {
  if (!hasGtag()) return;
  // Replace GA_MEASUREMENT_ID later with an env-based value if you like
  window.gtag!(
    "config",
    "GA_MEASUREMENT_ID" as unknown as string,
    { page_path: path } as unknown as object
  );
}

