import Section from './Section';
import { readContent } from '@/lib/content';

export default function About() {
  const { about } = readContent();
  return (
    <Section id="about" title={about.headline}>
      <div className="mx-auto max-w-3xl text-lg text-zinc-700">
        <p>{about.body}</p>
        <blockquote className="mt-6 border-l-4 border-zinc-300 pl-4 italic text-zinc-800">
          “{about.quote}”
        </blockquote>
      </div>
    </Section>
  );
}
