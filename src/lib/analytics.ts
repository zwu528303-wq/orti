import { track } from "@vercel/analytics";

export function trackEvent(
  eventName: string,
  payload?: Record<string, string | number>,
) {
  try {
    track(eventName, payload);
  } catch {
    // Analytics should never block the main user flow.
  }
}
