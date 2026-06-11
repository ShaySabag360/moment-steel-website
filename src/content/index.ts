import type { Dictionary, Lang } from "./types";
import { en } from "./en";
import { he } from "./he";

// Dictionary access point. Select the complete dictionary for a locale.
//
// No fallback merge and no silent per-key fallback to English: each locale
// returns its own full dictionary object. Structural parity between `en` and
// `he` is enforced at compile time (both are typed `Dictionary`), so a missing
// or renamed key fails the build rather than silently degrading to English at
// runtime.
export function getDictionary(lang: Lang): Dictionary {
  return lang === "he" ? he : en;
}

export type { Dictionary, Lang, NavLink } from "./types";
