import Section from './Section';
import { readContent } from '@/lib/content';

export default function Partners() {
  const { partners } = readContent();
  return (
    <Section id="partners" title="Trusted by These Brands">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
        {partners.map((p) => (
          <div key={p.name} className="flex items-center justify-center rounded-xl border border-zinc-200 bg-white p-6">
            <img src={p.logo} alt={p.name} className="h-10" />
          </div>
        ))}
      </div>
    </Section>
  );
}
