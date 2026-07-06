import Link from "next/link";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { services, clients, tools } from "@/data/services";
import { ProjectCard } from "@/components/ProjectCard";

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="px-6 sm:px-10 lg:px-14">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-[var(--color-line)] py-6">
        <p className="label">{site.role}</p>
        <Link
          href="/contact"
          className="head group flex items-center gap-3 rounded-full border border-[var(--color-line)] px-5 py-2 text-xs transition-colors hover:bg-[var(--color-elevated)]"
        >
          Let&apos;s Work
          <ArrowRight />
        </Link>
      </div>

      {/* Hero */}
      <section className="reveal relative -mx-6 overflow-hidden sm:-mx-10 lg:-mx-14">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={site.heroImage}
            alt=""
            className="ken-burns h-full w-full object-cover"
          />
          {/* Scrims for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)] via-[var(--color-bg)]/80 to-[var(--color-bg)]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-[var(--color-bg)]/50" />
        </div>

        <div className="flex min-h-[78vh] flex-col justify-center px-6 py-20 sm:px-10 lg:px-14">
          <h1 className="display leading-[0.84]">
            <span className="block text-[19vw] sm:text-[13.5vw] lg:text-[9.8vw] xl:text-[144px]">
              {site.firstName}
            </span>
            <span className="block text-[12.5vw] leading-[0.9] text-[var(--color-muted)] sm:text-[9vw] lg:text-[6.2vw] xl:text-[92px]">
              {site.lastName}
            </span>
          </h1>
          <p className="label mt-6">{site.role}</p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-[var(--color-muted)]">
            {site.intro}
          </p>
          <Link href="#work" className="arrow-link mt-8">
            View Selected Work
            <ArrowRight />
          </Link>
        </div>
      </section>

      {/* Featured work */}
      <section id="work" className="scroll-mt-24 py-14">
        <div className="flex items-end justify-between border-b border-[var(--color-line)] pb-5">
          <h2 className="head text-sm">Featured Work</h2>
          <Link href="/work" className="arrow-link">
            View All Projects
            <ArrowRight />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 border-t border-[var(--color-line)] py-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-panel)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={site.portrait} alt={site.name} className="h-full w-full object-cover grayscale" />
          </div>
          <div>
            <p className="label">About Me</p>
            <h3 className="head mt-3 max-w-md text-3xl leading-tight sm:text-4xl">
              {site.aboutHeadline}
            </h3>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-[var(--color-muted)]">
              {site.about}
            </p>
            <Link href="/about" className="arrow-link mt-7">
              More About Me
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24 border-t border-[var(--color-line)] py-16">
        <p className="label">What I Do</p>
        <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className="border-t border-[var(--color-line)] pt-4">
              <div className="flex items-baseline gap-3">
                <span className="text-[0.6rem] tabular-nums text-[var(--color-muted)]">
                  0{i + 1}
                </span>
                <h4 className="head text-base">{s.title}</h4>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Clients + tools */}
      <section className="grid gap-10 border-t border-[var(--color-line)] py-14 lg:grid-cols-2">
        <div>
          <p className="label">Selected Clients</p>
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
            {clients.map((c) => (
              <span key={c} className="head text-sm text-[var(--color-muted)]">
                {c}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="label">Tools of the Trade</p>
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
            {tools.map((t) => (
              <span key={t} className="head text-sm text-[var(--color-muted)]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="scroll-mt-24 border-t border-[var(--color-line)] py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h3 className="head text-2xl leading-snug sm:text-3xl">
              &ldquo;{site.quote}&rdquo;
            </h3>
            <p className="mt-4 font-[var(--font-display)] text-sm italic text-[var(--color-muted)]">
              — {site.name}
            </p>
          </div>
          <div>
            <p className="label">Have a project in mind?</p>
            <p className="mt-3 text-lg text-[var(--color-muted)]">
              Let&apos;s create something exceptional together.
            </p>
            <Link
              href="/contact"
              className="head mt-6 inline-flex items-center gap-3 border border-[var(--color-line)] px-6 py-3 text-xs transition-colors hover:bg-[var(--color-elevated)]"
            >
              Get in Touch
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--color-line)] py-8 lg:hidden">
        <p className="label text-[0.6rem]">
          © {new Date().getFullYear()} {site.name} — All rights reserved
        </p>
      </footer>
    </div>
  );
}
