import Image from "next/image";

// sm = Contact page direct-contact rows, lg = About team cards.
const SIZES = {
  sm: { box: "w-10 h-10", px: 40, initials: "text-xs" },
  lg: { box: "w-24 h-24", px: 96, initials: "text-2xl tracking-wider" },
} as const;

type AvatarProps = {
  /** Full name: the photo's alt text. */
  name: string;
  /** Shown when there is no photo. */
  initials: string;
  /** Square portrait under /public (e.g. /images/team/shay.webp). */
  photo?: string;
  size: keyof typeof SIZES;
  className?: string;
};

/**
 * Team member avatar: a square with the brand-pink frame holding the person's
 * photo, or their initials when no photo exists, so both read as one set.
 */
export default function Avatar({ name, initials, photo, size, className = "" }: AvatarProps) {
  const s = SIZES[size];
  return (
    <div
      className={`relative ${s.box} shrink-0 overflow-hidden bg-[#fd008d]/10 border border-[#fd008d]/30 flex items-center justify-center ${className}`}
    >
      {photo ? (
        <Image src={photo} alt={name} fill sizes={`${s.px}px`} className="object-cover" />
      ) : (
        <span className={`text-[#fd008d] font-bold ${s.initials}`}>{initials}</span>
      )}
    </div>
  );
}
