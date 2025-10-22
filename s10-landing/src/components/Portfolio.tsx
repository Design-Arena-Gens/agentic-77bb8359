import Section from './Section';
import { readContent } from '@/lib/content';

export default function Portfolio() {
  const { portfolio } = readContent();
  return (
    <Section id="work" title="Our Recent Projects">
      <div className="grid gap-6 md:grid-cols-3">
        {portfolio.map((p) => (
          <a key={p.title} href={p.link} className="group rounded-2xl border border-zinc-200 overflow-hidden bg-white">
            <div className="aspect-video bg-zinc-50 grid place-items-center">
              <img src={p.image} alt={p.title} className="h-20 transition-transform group-hover:scale-105" />
            </div>
            <div className="p-4 text-sm font-semibold">{p.title}</div>
          </a>
        ))}
      </div>
    </Section>
  );
}
