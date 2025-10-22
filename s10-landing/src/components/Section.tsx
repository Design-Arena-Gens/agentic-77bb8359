import { ReactNode } from 'react';

export default function Section({ id, title, subtitle, children }: { id?: string; title?: string; subtitle?: string; children: ReactNode }) {
  return (
    <section id={id} className="py-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6">
        {title && (
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
            {subtitle && <p className="mt-3 text-zinc-600">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
