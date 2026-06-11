import ContactForm from "@/components/ContactForm";
import { getDictionary } from "@/content";

const { contact } = getDictionary();

export const metadata = {
  title: "Contact — Moment Steel",
  description:
    "Get in touch with Moment Steel. Licensed structural engineers available for projects across Israel.",
};

export default function ContactPage() {
  return (
    <>
      {/* ─── Header ─── */}
      <section className="relative pt-28 pb-12 md:pt-40 md:pb-16 bg-[#0f0f0f] overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#fd008d]" />
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#fd008d] text-xl font-bold uppercase tracking-[0.25em] font-display mb-5">
            {contact.header.eyebrow}
          </p>
          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
            {contact.header.headline.line1}
            <br />
            {contact.header.headline.line2}
          </h1>
          <p className="text-gray-400 text-lg mt-5 max-w-xl leading-relaxed">
            {contact.header.intro}
          </p>
        </div>
      </section>

      {/* ─── Contact Layout ─── */}
      <section className="py-12 md:py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* ─── Form ─── */}
            <div data-animate className="lg:col-span-3 max-md:order-2">
              <ContactForm dict={contact.form} />
            </div>

            {/* ─── Contact Details ─── */}
            <div data-animate className="lg:col-span-2 space-y-10 max-md:order-1">

              {/* Direct contacts */}
              <div>
                <h3 className="text-white font-semibold uppercase tracking-widest text-sm mb-6">
                  {contact.directHeading}
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-[#fd008d]/10 border border-[#fd008d]/30 flex items-center justify-center shrink-0">
                      <span className="text-[#fd008d] font-bold text-xs">{contact.people[0].initials}</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-base">{contact.people[0].name}</p>
                      <p className="text-gray-500 text-sm mb-2">{contact.people[0].role}</p>
                      <a
                        href="tel:0508464851"
                        className="block text-gray-300 hover:text-white text-base transition-colors max-md:py-2.5"
                      >
                        {contact.people[0].phone}
                      </a>
                      <a
                        href="mailto:Shay@moment-steel.com"
                        className="block text-gray-300 hover:text-white text-base transition-colors max-md:py-2.5"
                      >
                        {contact.people[0].email}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-[#fd008d]/10 border border-[#fd008d]/30 flex items-center justify-center shrink-0">
                      <span className="text-[#fd008d] font-bold text-xs">{contact.people[1].initials}</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-base">{contact.people[1].name}</p>
                      <p className="text-gray-500 text-sm mb-2">{contact.people[1].role}</p>
                      <a
                        href="tel:0545367242"
                        className="block text-gray-300 hover:text-white text-base transition-colors max-md:py-2.5"
                      >
                        {contact.people[1].phone}
                      </a>
                      <a
                        href="mailto:Yoel@moment-steel.com"
                        className="block text-gray-300 hover:text-white text-base transition-colors max-md:py-2.5"
                      >
                        {contact.people[1].email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div>
                <h3 className="text-white font-semibold uppercase tracking-widest text-sm mb-4">
                  {contact.whatsappHeading}
                </h3>
                <a
                  href="https://wa.me/972545367242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#1a1a1a] border border-[#2d2d2d] px-5 py-4 hover:border-[#fd008d]/40 transition-colors group"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#fd008d]">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="text-gray-300 text-base group-hover:text-white transition-colors">
                    {contact.whatsappLink}
                  </span>
                </a>
              </div>

              {/* Office */}
              <div>
                <h3 className="text-white font-semibold uppercase tracking-widest text-sm mb-4">
                  {contact.officeHeading}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  {contact.address.line1}<br />
                  {contact.address.line2}
                </p>
              </div>

              {/* Divider note */}
              <div className="border-t border-[#2d2d2d] pt-8">
                <p className="text-gray-500 text-sm leading-relaxed">
                  {contact.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
