import type { Metadata } from "next";
import { site } from "@/data/site";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pt-16">
      <h1 className="text-4xl font-bold tracking-tight">
        Let&apos;s <span className="holo-text">work together</span>
      </h1>
      <p className="mt-3 text-[var(--color-muted)]">
        Have a project, a commission, or just want to say hi? Drop a message
        below or email{" "}
        <a href={`mailto:${site.email}`} className="text-[var(--color-violet)] hover:underline">
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
