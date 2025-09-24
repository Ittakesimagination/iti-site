/** Safe GA4 event logger; no-ops on server. */
export function logEventSafe(name: string, params: Record<string, unknown> = {}) {
  try {
    if (typeof window === "undefined") return;
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: name, ...params });
  } catch {}
}
