import type { Metadata } from "next";
import { site } from "@/data/site";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}.`,
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl px-6 pt-16 sm:px-10 lg:px-14">
      <p className="label">Contact</p>
      <h1 className="display mt-2 text-5xl leading-[0.9] sm:text-6xl">
        Let&apos;s work
        <br />
        together
      </h1>
      <p className="mt-5 text-sm leading-relaxed text-[var(--color-muted)]">
        Have a project, a commission, or just want to say hi? Drop a message
        below or email{" "}
        <a href={`mailto:${site.email}`} className="text-[var(--color-text)] underline">
          {site.email}
        </a>
        .
      </p>

      <div className="mt-10">
        <ContactForm />
      </div>
    </div>
  );
}
