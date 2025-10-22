import Section from './Section';
import { readContent } from '@/lib/content';

export default function Services() {
  const { services } = readContent();
  return (
    <Section id="services" title="Everything You Need to Stand Out in the Digital World">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl">{s.icon}</div>
            <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-zinc-600">{s.why}</p>
            <ul className="mt-4 list-disc pl-5 text-sm text-zinc-700">
              {s.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a href="#contact" className="rounded-full border border-zinc-300 px-6 py-3 font-semibold hover:bg-zinc-100">Explore All Services</a>
      </div>
    </Section>
  );
}
