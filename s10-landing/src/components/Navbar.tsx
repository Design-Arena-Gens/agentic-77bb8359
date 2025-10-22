import Link from 'next/link';

export default function Navbar() {
  const nav = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#why', label: 'Why S10' },
    { href: '#process', label: 'How It Works' },
    { href: '#work', label: 'Work' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="#" className="flex items-center gap-2">
          <img src="/logo.svg" alt="S10 Logo" className="h-8 w-8" />
          <span className="font-semibold">S10 Digital Solutions</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-700">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-black transition-colors">
              {n.label}
            </a>
          ))}
          <a href="#contact" className="rounded-full bg-black px-4 py-2 text-white hover:bg-zinc-800">Get Started</a>
        </nav>
      </div>
    </header>
  );
}
