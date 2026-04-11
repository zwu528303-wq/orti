import { track } from "@vercel/analytics";

export function trackEvent(
  eventName: string,
  payload?: Record<string, string | number>,
) {
  track(eventName, payload);
}
