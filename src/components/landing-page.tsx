"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, Play } from "lucide-react";
import { useState } from "react";

const navItems = ["Experiences", "Stories", "About", "Journal", "Contact"];

const experiences = [
  {
    title: "Harbor Dawn",
    image: "/images/fisherman.jpg",
    copy: "Begin before the town wakes, where fishermen read wind, tide, and silence before breakfast.",
  },
  {
    title: "Coastal Sushi",
    image: "/images/sushi.jpg",
    copy: "A private counter shaped by local catch, mineral sea air, and the chef's memory of the coast.",
  },
  {
    title: "Satoyama Table",
    image: "/images/satoyama.jpg",
    copy: "Walk green fields above the peninsula, then dine where mountain water meets the ocean.",
  },
  {
    title: "Rocky Shore Walk",
    image: "/images/rocky-shore.jpg",
    copy: "Move slowly along Miura's stone edges with locals who know the names of the coves.",
  },
  {
    title: "Ocean & Wellness",
    image: "/images/coastal-guide.jpg",
    copy: "Slow coastal rituals shaped by salt air, morning light, breath, and restoration.",
  },
];

const stories = [
  {
    name: "The okami",
    image: "/images/portrait-okami.jpg",
    quote: "Hospitality begins before words. It is the feeling that someone has made room for you.",
  },
  {
    name: "The farmer",
    image: "/images/farmer.jpg",
    quote: "The fields here are coastal. You can taste the wind, the rain, and the sea in the vegetables.",
  },
  {
    name: "The chef",
    image: "/images/chef.jpg",
    quote: "A meal is not performance. It is trust, placed quietly in front of you.",
  },
];

const testimonials = [
  {
    quote:
      "After Tokyo and Kyoto, this was the Japan we hoped still existed. Private, deeply human, and impossible to manufacture.",
    guest: "M. Laurent",
    place: "Paris",
  },
  {
    quote:
      "It felt less like being guided and more like being welcomed. The access came from real relationships.",
    guest: "A. Shah",
    place: "Dubai",
  },
  {
    quote:
      "Every detail was restrained, thoughtful, and emotionally precise. We left with names, not attractions.",
    guest: "E. Tan",
    place: "Singapore",
  },
];

function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-8 text-[0.68rem] font-medium uppercase tracking-[0.34em] text-[color:var(--ocean)]">
      {children}
    </p>
  );
}

function MagneticButton({
  children,
  variant = "light",
  icon,
}: {
  children: React.ReactNode;
  variant?: "light" | "dark";
  icon?: React.ReactNode;
}) {
  const dark = variant === "dark";

  return (
    <motion.a
      href="#contact"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      className={[
        "group inline-flex min-h-12 items-center justify-center gap-3 border px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] transition duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        dark
          ? "border-[color:var(--charcoal)] bg-[color:var(--charcoal)] text-[color:var(--ivory)] hover:bg-transparent hover:text-[color:var(--charcoal)] focus-visible:ring-[color:var(--charcoal)]"
          : "border-white/70 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-[color:var(--charcoal)] focus-visible:ring-white",
      ].join(" ")}
    >
      <span>{children}</span>
      {icon ?? <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </motion.a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-5 py-5 text-white mix-blend-difference md:px-8">
      <nav className="mx-auto flex max-w-[94rem] items-center justify-between" aria-label="Primary navigation">
        <a href="#" className="flex items-center gap-3" aria-label="Discover Zushi home">
          <Image
            src="/brand/discoverzushi_logo.png"
            alt=""
            width={34}
            height={34}
            className="size-8 rounded-full object-contain invert"
            priority
          />
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.26em]">Discover Zushi</span>
        </a>
        <div className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="quiet-link text-[0.68rem] uppercase tracking-[0.22em]">
              {item}
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex size-10 items-center justify-center border border-white/30 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <Menu className="size-5" />
        </button>
      </nav>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 border border-white/20 bg-black/70 p-5 backdrop-blur-xl md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block py-3 text-xs uppercase tracking-[0.24em]"
            >
              {item}
            </a>
          ))}
        </motion.div>
      ) : null}
    </header>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 180]);
  const opacity = useTransform(scrollY, [0, 620], [1, 0.2]);

  return (
    <section className="grain relative flex min-h-screen overflow-hidden bg-black text-white" aria-label="Discover Zushi hero">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image
          src="/images/shonan-ocean-hero.jpg"
          alt="Mount Fuji at sunset beyond the calm Shonan sea"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/22 to-black/72" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_65%,rgba(72,106,118,0.34),transparent_34rem)]" />
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex w-full max-w-[94rem] flex-col justify-end px-5 pb-10 pt-32 md:px-8 md:pb-14"
      >
        <FadeIn className="max-w-5xl">
          <p className="mb-6 text-[0.7rem] uppercase tracking-[0.4em] text-white/75">Coastal cultural journeys</p>
          <h1 className="font-serif-display text-balance text-[clamp(4rem,11vw,10.5rem)] font-normal uppercase leading-[0.82] tracking-[-0.01em]">
            Discover Japan
            <br />
            Through Its People.
          </h1>
          <p className="mt-7 text-xl tracking-[0.18em] text-white/90 md:text-2xl">観光では出会えない、日本へ。</p>
        </FadeIn>
        <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,34rem)_1fr] md:items-end">
          <FadeIn delay={0.12}>
            <p className="max-w-xl text-base leading-8 text-white/78 md:text-lg">
              Private cultural journeys through the sea, fields, kitchens, and quiet people of Shonan & Miura.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <MagneticButton>Apply for a Private Experience</MagneticButton>
            <motion.a
              href="#stories"
              whileHover={{ y: -3 }}
              className="group inline-flex min-h-12 items-center justify-center gap-3 border border-white/35 px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur-md transition hover:border-white hover:bg-white/10"
            >
              <Play className="size-4 fill-current" />
              Watch the Story
            </motion.a>
          </FadeIn>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-white/20 pt-5 text-[0.68rem] uppercase tracking-[0.28em] text-white/60">
          <span>Shonan & Miura, Japan</span>
          <ChevronDown className="size-5 animate-bounce" aria-hidden="true" />
        </div>
      </motion.div>
    </section>
  );
}

export function LandingPage() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />

      <section id="about" className="px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto grid max-w-[84rem] gap-14 md:grid-cols-[0.85fr_1.15fr] md:items-start">
          <FadeIn>
            <SectionLabel>01 / This Is Not a Tour</SectionLabel>
            <h2 className="font-serif-display text-balance text-5xl leading-[0.98] text-[color:var(--ink)] md:text-7xl">
              A quieter Japan shaped by ocean light, green hills, and the people who live between them.
            </h2>
          </FadeIn>
          <FadeIn delay={0.12} className="space-y-8 pt-2 text-lg leading-9 text-black/68 md:text-xl md:leading-10">
            <p>
              Guests are not moved from attraction to attraction. They are introduced to fishermen, farmers, chefs,
              artisans, and local families whose lives follow the rhythm of the Shonan and Miura coast.
            </p>
            <p>
              Each journey is composed through trust: a morning harbor, a private table, a field above the sea, a rocky
              shore at low tide, and small rooms where hands remember what words cannot explain.
            </p>
          </FadeIn>
        </div>
      </section>

      <section id="experiences" className="bg-[color:var(--charcoal)] px-5 py-24 text-[color:var(--ivory)] md:px-8 md:py-36">
        <div className="mx-auto max-w-[94rem]">
          <FadeIn className="mb-16 max-w-4xl">
            <SectionLabel>02 / Curated Experiences</SectionLabel>
            <h2 className="font-serif-display text-balance text-5xl leading-none md:text-8xl">
              Designed around tide, season, and human connection.
            </h2>
          </FadeIn>
          <div className="grid gap-5 md:grid-cols-5">
            {experiences.map((experience, index) => (
              <FadeIn key={experience.title} delay={index * 0.06}>
                <motion.article
                  whileHover={{ y: -8 }}
                  className="group relative min-h-[28rem] overflow-hidden border border-white/10 bg-white/5 md:min-h-[34rem]"
                >
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    className="object-cover opacity-78 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
                    sizes="(min-width: 768px) 20vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/18 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="mb-4 text-[0.65rem] uppercase tracking-[0.28em] text-white/55">0{index + 1}</p>
                    <h3 className="font-serif-display text-3xl leading-none">{experience.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-white/72 opacity-90 transition md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                      {experience.copy}
                    </p>
                  </div>
                </motion.article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="stories" className="px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-[94rem]">
          <FadeIn className="mb-14 grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
            <SectionLabel>03 / Stories</SectionLabel>
            <h2 className="font-serif-display text-balance text-5xl leading-none md:text-8xl">
              Portraits of a place, told through the people who keep it alive.
            </h2>
          </FadeIn>
          <FadeIn className="mb-16 grid gap-5 md:grid-cols-[1.25fr_0.75fr] md:items-end">
            <div className="relative min-h-[32rem] overflow-hidden md:min-h-[44rem]">
              <Image
                src="/images/torii-ocean.jpg"
                alt="A quiet torii gate standing in the sea near the Shonan coast"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 62vw, 100vw"
              />
            </div>
            <div className="border-y border-black/10 py-10 md:py-14">
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[color:var(--ocean)]">Shonan / Miura</p>
              <p className="mt-8 font-serif-display text-4xl leading-tight text-[color:var(--ink)] md:text-6xl">
                Not far from Tokyo, the landscape slows into coves, farms, fishing ports, and sea-facing shrines.
              </p>
            </div>
          </FadeIn>
          <div className="grid gap-12">
            {stories.map((story, index) => (
              <FadeIn key={story.name}>
                <article className="grid gap-8 border-t border-black/10 pt-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                  <div className={index % 2 ? "md:order-2" : ""}>
                    <div className="relative aspect-[4/5] overflow-hidden md:aspect-[16/10]">
                      <Image src={story.image} alt={story.name} fill className="object-cover" sizes="(min-width: 768px) 58vw, 100vw" />
                    </div>
                  </div>
                  <div className="max-w-xl">
                    <p className="mb-8 text-[0.68rem] uppercase tracking-[0.3em] text-[color:var(--ocean)]">{story.name}</p>
                    <blockquote className="font-serif-display text-4xl leading-tight text-[color:var(--ink)] md:text-6xl">
                      “{story.quote}”
                    </blockquote>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[80vh] overflow-hidden bg-black px-5 py-24 text-white md:px-8 md:py-36">
        <Image src="/images/beach-table.jpg" alt="A beachside gathering with chefs serving food near the sea" fill className="object-cover opacity-58" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/84 via-black/46 to-black/18" />
        <FadeIn className="relative z-10 mx-auto grid max-w-[94rem] gap-14 md:grid-cols-[0.95fr_1.05fr] md:items-end">
          <div>
            <SectionLabel>04 / Why Discover Zushi</SectionLabel>
            <h2 className="font-serif-display text-balance text-5xl leading-none md:text-8xl">The coast opens only through trust.</h2>
          </div>
          <div className="space-y-7 text-lg leading-9 text-white/76">
            <p>
              Discover Zushi is rooted in daily relationships across harbors, farms, family kitchens, and sea-facing
              neighborhoods: the introductions, permissions, and quiet respect that turn access into belonging.
            </p>
            <p>
              A community of 120K+ Instagram followers has grown around these local stories, but the private experiences
              remain intentionally small, seasonal, and close to the land and water.
            </p>
          </div>
        </FadeIn>
      </section>

      <section id="journal" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[94rem]">
          <FadeIn className="mb-12">
            <SectionLabel>05 / Social Proof</SectionLabel>
          </FadeIn>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <FadeIn key={item.guest} delay={index * 0.08}>
                <figure className="border border-black/10 bg-white/30 p-8 backdrop-blur-sm">
                  <blockquote className="font-serif-display text-3xl leading-tight text-[color:var(--ink)]">“{item.quote}”</blockquote>
                  <figcaption className="mt-10 text-[0.68rem] uppercase tracking-[0.26em] text-black/52">
                    {item.guest} / {item.place}
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e8dfcf] px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto grid max-w-[84rem] gap-14 md:grid-cols-[1fr_1fr] md:items-center">
          <FadeIn>
            <div className="relative aspect-[4/5] overflow-hidden">
            <Image src="/images/beach-cafe.jpg" alt="A quiet beach cafe moment on the Shonan coast" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
          </FadeIn>
          <FadeIn delay={0.12}>
            <SectionLabel>06 / Limited Private Experience</SectionLabel>
            <h2 className="font-serif-display text-balance text-5xl leading-none text-[color:var(--ink)] md:text-7xl">
              A few journeys each month, timed to the coast.
            </h2>
            <p className="mt-8 text-lg leading-9 text-black/66">
              Availability is limited because the hosts are real people with real lives, and the coast has its own
              calendar. Each request is reviewed for season, weather, intention, and the right cultural fit.
            </p>
            <div className="mt-10">
              <MagneticButton variant="dark">Apply for a Private Experience</MagneticButton>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="contact" className="relative flex min-h-screen items-end overflow-hidden bg-black px-5 py-12 text-white md:px-8 md:py-16">
        <Image src="/images/coastal-guide.jpg" alt="A local guide looking over the Shonan ocean" fill className="object-cover opacity-62" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/46 to-black/12" />
        <FadeIn className="relative z-10 mx-auto w-full max-w-[94rem]">
          <p className="mb-8 text-[0.7rem] uppercase tracking-[0.38em] text-white/62">A private invitation into coastal Japanese life</p>
          <h2 className="font-serif-display text-balance text-[clamp(4rem,10vw,10rem)] uppercase leading-[0.86]">
            Follow the sea.
            <br />
            Meet the people.
          </h2>
          <div className="mt-10 flex flex-col gap-5 border-t border-white/20 pt-8 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl text-base leading-8 text-white/72">
              For travelers who have already seen Japan, and now wish to feel its coastal life from the inside.
            </p>
            <MagneticButton>Apply for a Private Experience</MagneticButton>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
