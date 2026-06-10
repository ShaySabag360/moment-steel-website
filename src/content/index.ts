import type { Dictionary } from "./types";
import { en } from "./en";

// Dictionary access point. Centralizing here means that when locale routing
// is introduced (P1.2), only this helper changes to select by `lang` — call
// sites stay the same.
//
// P1.1 pilot: English is the only available locale, so this takes no argument
// yet. A `lang` parameter + Hebrew dictionary are wired in a later phase.
export function getDictionary(): Dictionary {
  return en;
}

export type { Dictionary, Lang, NavLink } from "./types";
