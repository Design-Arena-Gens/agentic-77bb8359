import Section from './Section';
import { readContent } from '@/lib/content';

export default function Pricing() {
  const { pricing } = readContent();
  return (
    <Section id="pricing" title="Flexible Packages for Every Need">
      <div className="grid gap-6 md:grid-cols-3">
        {pricing.map((p) => (
          <div key={p.name} className="rounded-2xl border border-zinc-200 p-6">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <div className="mt-2 text-3xl font-extrabold">{p.price}</div>
            <div className="mt-1 text-sm text-zinc-500">{p.ideal}</div>
            <ul className="mt-4 list-disc pl-5 text-sm text-zinc-700">
              {p.includes.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <div className="mt-6">
              <a href="#contact" className="w-full inline-block text-center rounded-full bg-black px-6 py-3 text-white font-semibold hover:bg-zinc-800">Get a Quote</a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
