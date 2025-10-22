import Section from './Section';
import { readContent } from '@/lib/content';

export default function WhyChoose() {
  const { reasons } = readContent();
  return (
    <Section id="why" title="Why Businesses and Professionals Trust S10">
      <div className="grid gap-6 md:grid-cols-3">
        {reasons.map((r) => (
          <div key={r.title} className="rounded-2xl border border-zinc-200 p-6">
            <div className="text-3xl">{r.icon}</div>
            <h3 className="mt-3 text-lg font-semibold">{r.title}</h3>
            <p className="mt-2 text-sm text-zinc-600">{r.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a href="#contact" className="rounded-full bg-black px-6 py-3 text-white font-semibold hover:bg-zinc-800">Get Your Free Consultation</a>
      </div>
    </Section>
  );
}
