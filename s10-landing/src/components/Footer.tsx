import Link from 'next/link';
import { readContent } from '@/lib/content';

export default function Footer() {
  const { links, site } = readContent();
  return (
    <footer className="mt-20 border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-6 py-10 grid gap-6 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="S10 Logo" className="h-8 w-8" />
            <span className="font-semibold">{site.name}</span>
          </div>
          <p className="mt-3 text-sm text-zinc-600">
            {site.location}
          </p>
          <p className="mt-1 text-sm">📧 <a className="underline" href={`mailto:${site.email}`}>{site.email}</a></p>
        </div>
        <div className="flex items-center md:justify-end gap-4 text-sm">
          <Link href={links.privacy}>Privacy Policy</Link>
          <Link href={links.terms}>Terms of Service</Link>
          <a href={links.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={links.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
      <div className="border-t border-zinc-200 py-4 text-center text-sm text-zinc-600">
        © 2025 {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
