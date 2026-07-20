// Lightweight, provider-agnostic event hook. No analytics provider is wired
// up in this project — this only forwards to `window.dataLayer` if a tag
// manager script has already been added elsewhere, and is a safe no-op
// otherwise. Do not use this to send clinical/medical answers.
type EventPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(name: string, payload: EventPayload = {}) {
  if (typeof window === "undefined") return;
  if (!Array.isArray(window.dataLayer)) return;
  window.dataLayer.push({ event: name, ...payload });
}
