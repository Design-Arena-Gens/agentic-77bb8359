import Section from './Section';
import { readContent } from '@/lib/content';

export default function Process() {
  const { process } = readContent();
  return (
    <Section id="process" title="Getting Started Is Simple">
      <ol className="grid gap-6 md:grid-cols-3">
        {process.map((p) => (
          <li key={p.step} className="rounded-2xl border border-zinc-200 p-6">
            <div className="h-10 w-10 grid place-items-center rounded-full bg-black text-white font-bold">{p.step}</div>
            <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-zinc-600">{p.text}</p>
          </li>
        ))}
      </ol>
      <div className="mt-8 text-center">
        <a href="#contact" className="rounded-full bg-black px-6 py-3 text-white font-semibold hover:bg-zinc-800">Start Your Project</a>
      </div>
    </Section>
  );
}
