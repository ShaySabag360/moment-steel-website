/**
 * Single source of truth for the company's contact details. Every component
 * that shows a phone number, email, WhatsApp or Facebook link reads it from
 * here, so a changed number or URL is edited in one place only.
 */

export interface Contact {
  /** Phone number as displayed (local format, dashed). */
  phone: string;
  email: string;
}

export const CONTACTS = {
  shay: { phone: "050-846-4851", email: "Shay@moment-steel.com" },
  yoel: { phone: "054-536-7242", email: "Yoel@moment-steel.com" },
} satisfies Record<string, Contact>;

export type ContactId = keyof typeof CONTACTS;

/** WhatsApp chat link (Yoel's number). */
export const WHATSAPP_URL = "https://wa.me/972545367242";

/** Company Facebook page. The URL may change to a username, so keep it here only. */
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61596729955820";

/** `tel:` href for a displayed phone number ("054-536-7242" -> "tel:0545367242"). */
export const telHref = (phone: string): string => `tel:${phone.replace(/\D/g, "")}`;

/** `mailto:` href for an email address. */
export const mailtoHref = (email: string): string => `mailto:${email}`;
