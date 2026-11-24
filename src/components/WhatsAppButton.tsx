"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { WhatsAppIcon } from "@/components/icons";
import { WHATSAPP_URL } from "@/lib/contact";

/**
 * Mobile-only floating WhatsApp button (hidden from md up), on every page.
 *
 * It steps aside (fades out, takes no taps) while a form's submit button is on
 * screen or a text field has focus, so it never covers the contact form's
 * "Send" button or sits over the on-screen keyboard. Its offsets include the
 * iPhone safe-area insets (the root layout sets viewport-fit=cover).
 */
export default function WhatsAppButton({ label }: { label: string }) {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const focused = document.activeElement;
        const typing =
          focused instanceof HTMLElement && focused.matches("input, textarea, select");
        const submitOnScreen = Array.from(
          document.querySelectorAll("form [type='submit']"),
        ).some((el) => {
          const r = el.getBoundingClientRect();
          return r.height > 0 && r.bottom > 0 && r.top < window.innerHeight;
        });
        setHidden(typing || submitOnScreen);
      });
    };

    // DOM changes cover a form swapping its button out (e.g. a success message).
    const observer = new MutationObserver(update);
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    document.addEventListener("focusin", update);
    document.addEventListener("focusout", update);
    update();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      document.removeEventListener("focusin", update);
      document.removeEventListener("focusout", update);
    };
  }, [pathname]);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
      className={`md:hidden fixed z-40 bottom-[calc(1.25rem_+_env(safe-area-inset-bottom))] right-[calc(1.25rem_+_env(safe-area-inset-right))] w-14 h-14 rounded-full bg-[#fd008d] text-white flex items-center justify-center shadow-lg shadow-black/40 transition-opacity duration-200 ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
