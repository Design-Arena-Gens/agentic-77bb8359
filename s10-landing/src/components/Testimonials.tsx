import Section from './Section';
import { readContent } from '@/lib/content';

export default function Testimonials() {
  const { testimonials } = readContent();
  return (
    <Section id="testimonials" title="What Our Early Clients Say">
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-2xl border border-zinc-200 p-6 bg-white shadow-sm">
            <p className="text-sm text-zinc-700">“{t.text}”</p>
            <div className="mt-4 text-sm font-semibold">{t.name}</div>
            <div className="text-xs text-zinc-500">{t.role}</div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-zinc-500">More portfolio testimonials coming soon.</p>
    </Section>
  );
}
