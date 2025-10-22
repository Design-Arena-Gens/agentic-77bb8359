import { readContent } from '@/lib/content';

export default function Hero() {
  const { hero } = readContent();
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-50 via-white to-white" />
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            {hero.headline}
          </h1>
          <p className="mt-6 text-lg text-zinc-600 max-w-xl">
            {hero.subheadline}
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#contact" className="rounded-full bg-black px-6 py-3 text-white font-semibold hover:bg-zinc-800">{hero.ctaPrimary}</a>
            <a href="#work" className="rounded-full border border-zinc-300 px-6 py-3 font-semibold hover:bg-zinc-100">{hero.ctaSecondary}</a>
          </div>
        </div>
        <div className="relative">
          <div className="relative mx-auto aspect-square w-80 md:w-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 via-cyan-500/20 to-amber-500/20 blur-3xl" />
            <div className="absolute inset-0 grid place-items-center">
              <img src="/logo.svg" alt="S10 Logo" className="h-24 w-24 drop-shadow" />
            </div>
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-3 py-2 shadow">🎨</div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-white px-3 py-2 shadow">📈</div>
              <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 rounded-full bg-white px-3 py-2 shadow">📝</div>
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-3 py-2 shadow">🤖</div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-3 py-2 shadow">💻</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
