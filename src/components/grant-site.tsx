import { useState } from "react";
import { ExternalLink, Gift, Play, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VbucksDialog } from "@/components/vbucks-dialog";
import { interests, site, videos, type Video } from "@/lib/site";
import { cn } from "@/lib/utils";

export function GrantSite() {
  const [donateOpen, setDonateOpen] = useState(false);
  const [active, setActive] = useState<Video>(videos[0]);
  const [playing, setPlaying] = useState(false);

  function selectVideo(video: Video) {
    setActive(video);
    setPlaying(false);
  }

  return (
    <div className="min-h-dvh overflow-x-hidden bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#main" className="flex min-h-11 items-center gap-3">
            <img
              src="/images/channel-avatar.jpg"
              alt=""
              width={40}
              height={40}
              className="size-10 rounded-md object-cover outline outline-1 -outline-offset-1 outline-foreground/15"
            />
            <span className="font-display text-lg tracking-tight">
              {site.name}
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
            <a href="#about" className="hover:text-foreground">
              About
            </a>
            <a href="#games" className="hover:text-foreground">
              Games
            </a>
            <a href="#videos" className="hover:text-foreground">
              Videos
            </a>
            <a
              href={site.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              YouTube
            </a>
          </nav>
          <Button size="sm" className="pl-4 pr-3.5" onClick={() => setDonateOpen(true)}>
            Donate Now
            <Gift />
          </Button>
        </div>
      </header>

      <main id="main">
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 right-0 font-display text-[14rem] leading-none text-foreground/5 select-none sm:text-[18rem]"
          >
            10
          </div>
          <div className="mx-auto grid max-w-6xl min-w-0 items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 lg:py-20">
            <div className="flex flex-col gap-6">
              <p className="text-sm font-medium tracking-[0.18em] text-muted uppercase">
                {site.handle} · {site.age} years old
              </p>
              <h1 className="font-display text-5xl leading-[0.92] tracking-tight sm:text-7xl">
                Grant
                <br />
                Hodge
              </h1>
              <p className="max-w-md text-lg leading-relaxed text-muted">
                Fifth grade at {site.school}. Baseball under the lights. Fortnite,
                Rocket League, and Pokémon on the weekends. Videos as{" "}
                <a
                  href={site.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground underline decoration-border underline-offset-4 hover:decoration-primary"
                >
                  @{site.handle}
                </a>
                .
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="pl-5 pr-4"
                  onClick={() => setDonateOpen(true)}
                >
                  Donate Now
                  <Gift />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={site.youtubeUrl} target="_blank" rel="noreferrer">
                    <Youtube />
                    Watch on YouTube
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative min-w-0">
              <div className="overflow-hidden rounded-2xl shadow-card">
                <img
                  src="/images/hero-mascot.jpg"
                  alt="Firecraft phoenix mascot with a headset on a night baseball field"
                  width={900}
                  height={1200}
                  className="aspect-[3/4] w-full object-cover outline outline-1 -outline-offset-1 outline-foreground/10"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border sm:grid-cols-4">
            {[
              { label: "Grade", value: "5th" },
              { label: "Age", value: String(site.age) },
              { label: "Channel", value: `@${site.handle}` },
              { label: "Subscribers", value: site.subscribers },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-background px-4 py-6 sm:px-6"
              >
                <p className="text-xs tracking-[0.16em] text-muted uppercase">
                  {stat.label}
                </p>
                <p className="mt-2 font-display text-2xl tracking-tight sm:text-3xl">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-medium tracking-[0.18em] text-muted uppercase">
                About
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
                A kid from Poplarville with a channel and a glove.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                Grant Hodge is {site.age}. He is in {site.grade.toLowerCase()} at{" "}
                {site.school} in Poplarville, Mississippi. He plays baseball,
                records gaming videos, and still gets loud over a good Pokémon
                pack.
              </p>
              <p>
                His YouTube channel is {site.handle} — Fortnite clips, pack
                openings, and whatever he is playing that week. This site is his
                home on the web: the videos, the games, and a Donate Now button
                for V-Bucks.
              </p>
            </div>
          </div>
        </section>

        <section id="games" className="bg-card py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-10 flex flex-col gap-3 sm:mb-14">
              <p className="text-sm font-medium tracking-[0.18em] text-muted uppercase">
                What he plays
              </p>
              <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
                Games and baseball.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {interests.map((item) => (
                <article
                  key={item.id}
                  className="group overflow-hidden rounded-xl bg-background shadow-card transition-[box-shadow] duration-150 hover:shadow-card-hover"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.alt}
                      width={800}
                      height={600}
                      className="aspect-[4/3] w-full object-cover outline outline-1 -outline-offset-1 outline-foreground/10 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-col gap-2 p-5 sm:p-6">
                    <h3 className="font-display text-2xl tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted sm:text-base">
                      {item.blurb}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="videos" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium tracking-[0.18em] text-muted uppercase">
                Firecraft10
              </p>
              <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
                Watch the channel.
              </h2>
            </div>
            <Button variant="outline" asChild>
              <a href={site.youtubeUrl} target="_blank" rel="noreferrer">
                Open YouTube
                <ExternalLink />
              </a>
            </Button>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
            <div className="min-w-0 overflow-hidden rounded-xl bg-card shadow-card">
              <div className="relative aspect-video bg-background">
                {playing ? (
                  <iframe
                    title={active.title}
                    src={`https://www.youtube-nocookie.com/embed/${active.id}?autoplay=1&rel=0`}
                    className="absolute inset-0 size-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    className="group absolute inset-0"
                    aria-label={`Play ${active.title}`}
                  >
                    <img
                      src={`https://i.ytimg.com/vi/${active.id}/hq720.jpg`}
                      alt=""
                      width={1280}
                      height={720}
                      className="size-full max-w-full object-cover"
                    />
                    <span className="absolute inset-0 bg-background/20" />
                    <span className="absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-card transition-transform duration-150 group-hover:scale-105">
                      <Play className="ml-0.5 size-6 fill-current" />
                    </span>
                  </button>
                )}
              </div>
              <div className="flex flex-col gap-1 p-5">
                <h3 className="text-lg font-medium leading-snug">{active.title}</h3>
                <p className="text-sm text-muted">
                  {active.views} · {active.posted}
                </p>
              </div>
            </div>

            <ul className="flex min-w-0 flex-col gap-2">
              {videos.map((video) => {
                const isActive = video.id === active.id;
                return (
                  <li key={video.id}>
                    <button
                      type="button"
                      onClick={() => selectVideo(video)}
                      className={cn(
                        "flex w-full min-h-16 min-w-0 items-center gap-3 rounded-lg p-2 text-left transition-[background-color,box-shadow] duration-150",
                        isActive
                          ? "bg-card shadow-[inset_0_0_0_1px_var(--color-primary)]"
                          : "hover:bg-card",
                      )}
                    >
                      <img
                        src={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`}
                        alt=""
                        width={160}
                        height={90}
                        className="h-16 w-28 shrink-0 rounded-sm object-cover outline outline-1 -outline-offset-1 outline-foreground/10"
                      />
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-medium">
                          {video.title}
                        </span>
                        <span className="block text-xs text-muted">
                          {video.posted}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section id="donate" className="bg-card">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl bg-background shadow-card">
              <img
                src="/images/vbucks-crystal.jpg"
                alt="Stacked glowing crystals"
                width={800}
                height={800}
                className="aspect-square w-full object-cover outline outline-1 -outline-offset-1 outline-foreground/10"
              />
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-sm font-medium tracking-[0.18em] text-muted uppercase">
                V-Bucks
              </p>
              <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
                Donate Now.
              </h2>
              <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg">
                Grant wants V-Bucks. Pick a stack and send a grown-up the steps
                to gift them in Fortnite. This site cannot transfer V-Bucks by
                itself — Epic only lets friends gift in-game.
              </p>
              <div>
                <Button
                  size="xl"
                  className="pl-6 pr-5"
                  onClick={() => setDonateOpen(true)}
                >
                  Donate Now
                  <Gift />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="font-display text-lg tracking-tight">{site.domain}</p>
          <p className="text-sm text-muted">
            {site.name} · @{site.handle} · {site.grade}
          </p>
        </div>
      </footer>

      <VbucksDialog open={donateOpen} onOpenChange={setDonateOpen} />
    </div>
  );
}
