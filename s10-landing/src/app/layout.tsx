import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { readContent } from "@/lib/content";
import ScrollTopButton from "@/components/ScrollTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const content = readContent();

export const metadata: Metadata = {
  title: `${content.site.name} | AI Digital Solutions | Web Development | Resume Builder | S10 Sri Lanka`,
  description: content.hero.subheadline,
  metadataBase: new URL("https://agentic-77bb8359.vercel.app"),
  openGraph: {
    title: `${content.site.name} | AI Digital Solutions` ,
    description: content.hero.subheadline,
    url: "https://agentic-77bb8359.vercel.app",
    siteName: content.site.name,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: content.site.name,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${content.site.name} | AI Digital Solutions`,
    description: content.hero.subheadline,
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased` }>
        <Navbar />
        {children}
        <Footer />
        <a href={content.links.whatsapp} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 font-semibold text-white shadow-lg hover:bg-green-600">
          <span>WhatsApp</span>
        </a>
        <ScrollTopButton />
      </body>
    </html>
  );
}
