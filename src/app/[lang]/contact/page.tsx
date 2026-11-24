import type { Metadata } from "next";
import Avatar from "@/components/Avatar";
import ContactForm from "@/components/ContactForm";
import { WhatsAppIcon } from "@/components/icons";
import { getDictionary, type Lang } from "@/content";
import { CONTACTS, WHATSAPP_URL, mailtoHref, telHref } from "@/lib/contact";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = (await params).lang as Lang;
  return buildPageMetadata(lang, "contact");
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang as Lang;
  const { contact } = getDictionary(lang);
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
                  {contact.people.map((person) => {
                    const { phone, email } = CONTACTS[person.id];
                    return (
                      <div key={person.id} className="flex gap-4 items-start">
                        <Avatar
                          name={person.name}
                          initials={person.initials}
                          photo={person.photo}
                          size="sm"
                        />
                        <div>
                          <p className="text-white font-semibold text-base">{person.name}</p>
                          <p className="text-gray-500 text-sm mb-2">{person.role}</p>
                          <a
                            href={telHref(phone)}
                            className="block text-gray-300 hover:text-white text-base transition-colors max-md:py-2.5"
                          >
                            <bdi>{phone}</bdi>
                          </a>
                          <a
                            href={mailtoHref(email)}
                            className="block text-gray-300 hover:text-white text-base transition-colors max-md:py-2.5"
                          >
                            <bdi>{email}</bdi>
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* WhatsApp */}
              <div>
                <h3 className="text-white font-semibold uppercase tracking-widest text-sm mb-4">
                  {contact.whatsappHeading}
                </h3>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#1a1a1a] border border-[#2d2d2d] px-5 py-4 hover:border-[#fd008d]/40 transition-colors group"
                >
                  <WhatsAppIcon className="w-5 h-5 text-[#fd008d]" />
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
