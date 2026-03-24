export const COOKIE_CONSENT_STORAGE_KEY = "saair_energy_cookie_consent_v1";

export const COOKIE_CONSENT_TTL_MS = 7 * 24 * 60 * 60 * 1000;

export type CookieConsentChoice = "accept" | "reject";

export type StoredCookieConsent = {
  choice: CookieConsentChoice;
  expiresAt: number;
};

export function parseStoredCookieConsent(
  raw: string | null,
): StoredCookieConsent | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (
      typeof parsed !== "object" ||
      parsed === null ||
      !("choice" in parsed) ||
      !("expiresAt" in parsed)
    ) {
      return null;
    }
    const choice = (parsed as { choice: unknown }).choice;
    const expiresAt = (parsed as { expiresAt: unknown }).expiresAt;
    if (choice !== "accept" && choice !== "reject") return null;
    if (typeof expiresAt !== "number" || !Number.isFinite(expiresAt)) {
      return null;
    }
    return { choice, expiresAt };
  } catch {
    return null;
  }
}

export function buildCookieConsentPayload(choice: CookieConsentChoice): string {
  const expiresAt = Date.now() + COOKIE_CONSENT_TTL_MS;
  return JSON.stringify({ choice, expiresAt } satisfies StoredCookieConsent);
}

export function isCookieConsentValid(
  stored: StoredCookieConsent | null,
): stored is StoredCookieConsent {
  if (!stored) return false;
  return stored.expiresAt > Date.now();
}
