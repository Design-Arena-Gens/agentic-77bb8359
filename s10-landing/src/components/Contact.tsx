import Section from './Section';
import { readContent } from '@/lib/content';

export default function Contact() {
  const { site } = readContent();
  return (
    <Section id="contact" title="Let’s Build Something Smart Together">
      <div className="grid gap-10 md:grid-cols-2">
        <form action="https://formspree.io/f/mayzkpno" method="POST" className="rounded-2xl border border-zinc-200 p-6 bg-white">
          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input name="name" required className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div>
              <label className="block text-sm font-medium">Service Required</label>
              <select name="service" className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black">
                <option>Design & Branding</option>
                <option>Digital Marketing</option>
                <option>Resume Building</option>
                <option>AI Productivity Tools</option>
                <option>Web Development</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea name="message" rows={5} className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div className="flex gap-3">
              <button className="rounded-full bg-black px-6 py-3 text-white font-semibold hover:bg-zinc-800">Send Message</button>
              <a href={site ? `https://wa.me/${site.whatsapp?.replace(/\D/g,'')}` : '#'} target="_blank" rel="noreferrer" className="rounded-full border border-zinc-300 px-6 py-3 font-semibold hover:bg-zinc-100">Chat on WhatsApp</a>
            </div>
          </div>
        </form>
        <div className="rounded-2xl border border-zinc-200 p-6">
          <h3 className="text-lg font-semibold">Contact</h3>
          <p className="mt-2 text-sm">📧 <a className="underline" href={`mailto:${site.email}`}>{site.email}</a></p>
          <p className="mt-1 text-sm">📍 {site.location}</p>
          <p className="mt-1 text-sm">🌍 We work with clients worldwide</p>
        </div>
      </div>
    </Section>
  );
}
