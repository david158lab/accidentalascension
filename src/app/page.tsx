import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GradientDivider } from "@/components/GradientDivider";
import { SocialLink } from "@/components/SocialLink";

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative min-h-[80vh] md:min-h-dvh flex flex-col items-center justify-center py-20 px-6 overflow-hidden">
        {/* Ink textures — background layer */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/ink-pink.png"
            alt=""
            width={500}
            height={500}
            className="absolute -top-20 -right-20 w-72 md:w-96 opacity-20 dark:opacity-15 blur-[1px]"
            aria-hidden
            priority
          />
          <Image
            src="/images/ink-blue.png"
            alt=""
            width={500}
            height={500}
            className="absolute -bottom-20 -left-20 w-72 md:w-96 opacity-15 dark:opacity-10 blur-[1px]"
            aria-hidden
            priority
          />
          <Image
            src="/images/ink-amber.png"
            alt=""
            width={500}
            height={500}
            className="absolute top-1/3 -left-32 w-64 md:w-80 opacity-10 dark:opacity-8 blur-[2px]"
            aria-hidden
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
          {/* Portrait */}
          <div className="mb-8 relative">
            <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-silver/30 dark:border-silver/20 shadow-lg">
              <Image
                src="/images/david.png"
                alt="David"
                width={400}
                height={400}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Logo lockup */}
          <Image
            src="/images/logo-lockup.png"
            alt="Accidental Ascension"
            width={600}
            height={200}
            className="w-72 md:w-96 mb-8 dark:brightness-110 dark:contrast-105"
            priority
          />

          {/* Tagline */}
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-royal-blue via-violet to-coral bg-clip-text text-transparent">
            What does it mean to be human?
          </h1>

          <p className="text-base md:text-lg text-mid-grey dark:text-silver font-normal max-w-md leading-relaxed">
            The journey unfolds one episode at a time.
          </p>

          {/* Scroll cue */}
          <div className="mt-16 animate-scroll-cue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="w-6 h-6 text-silver/60"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      <GradientDivider className="my-0" />

      {/* ── Listen ── */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-4">
              Listen
            </h2>
            <p className="text-center text-mid-grey dark:text-silver mb-10 max-w-md mx-auto">
              Honest conversations about healing, growth, and what it means to
              show up as yourself.
            </p>
          </ScrollReveal>

          {/* Spotify embed — full show player */}
          <ScrollReveal delay={150}>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://open.spotify.com/embed/show/4ZoMVtOU0uqQ4akeouwbvf?utm_source=generator&theme=0"
                width="100%"
                height="352"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="border-0"
                title="Accidental Ascension on Spotify"
              />
            </div>
          </ScrollReveal>

          {/* Apple Podcasts link */}
          <ScrollReveal delay={300}>
            <div className="mt-8 flex justify-center">
              <a
                href="https://podcasts.apple.com/podcast/id1717389282"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                  bg-charcoal/5 dark:bg-off-white/5
                  border border-silver/20 dark:border-silver/10
                  hover:border-violet/40 dark:hover:border-violet/40
                  transition-all duration-300 text-sm font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-violet"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2.5a7.5 7.5 0 110 15 7.5 7.5 0 010-15zm0 2a5.5 5.5 0 00-2.5 10.39V14.5a2.5 2.5 0 115 0v2.39A5.5 5.5 0 0012 6.5z" />
                </svg>
                Also on Apple Podcasts
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <GradientDivider />

      {/* ── Watch ── */}
      <section className="py-20 md:py-28 px-6 relative overflow-hidden">
        {/* Subtle ink accent */}
        <Image
          src="/images/ink-amber.png"
          alt=""
          width={400}
          height={400}
          className="absolute -right-32 top-0 w-64 opacity-8 dark:opacity-5 blur-[2px] pointer-events-none"
          aria-hidden
        />

        <div className="max-w-2xl mx-auto relative z-10">
          <ScrollReveal>
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-4">
              Watch
            </h2>
            <p className="text-center text-mid-grey dark:text-silver mb-10 max-w-md mx-auto">
              The face behind the voice. Full episodes, clips, and the
              conversations that didn't fit the audio.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="flex justify-center">
              <a
                href="https://www.youtube.com/@accidental_ascension"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full
                  bg-charcoal dark:bg-off-white
                  text-off-white dark:text-charcoal
                  font-semibold text-base
                  hover:scale-105 active:scale-100
                  transition-all duration-300 shadow-lg
                  hover:shadow-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Watch on YouTube
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <GradientDivider />

      {/* ── Connect ── */}
      <section className="py-20 md:py-28 px-6 relative overflow-hidden">
        <Image
          src="/images/ink-pink.png"
          alt=""
          width={400}
          height={400}
          className="absolute -left-32 bottom-0 w-56 opacity-8 dark:opacity-5 blur-[2px] pointer-events-none"
          aria-hidden
        />

        <div className="max-w-2xl mx-auto relative z-10">
          <ScrollReveal>
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-4">
              Connect
            </h2>
            <p className="text-center text-mid-grey dark:text-silver mb-10 max-w-sm mx-auto">
              Come say hello. The conversation doesn't end when the episode
              does.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="flex flex-wrap justify-center gap-4">
              <SocialLink
                href="https://www.instagram.com/accidental_ascension"
                label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </SocialLink>

              <SocialLink
                href="https://www.facebook.com/accidental_ascension"
                label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </SocialLink>

              <SocialLink
                href="https://www.tiktok.com/@accidental_ascension"
                label="TikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </SocialLink>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <GradientDivider />

      {/* ── Footer ── */}
      <footer className="py-16 px-6 text-center">
        <Image
          src="/images/aa-mark.png"
          alt="Accidental Ascension"
          width={80}
          height={80}
          className="w-12 h-12 mx-auto mb-6 opacity-60 dark:opacity-40"
        />
        <p className="text-sm text-mid-grey dark:text-silver/60">
          &copy; {new Date().getFullYear()} Accidental Ascension
        </p>
      </footer>
    </main>
  );
}
