"use client";

export default function ScrollTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-28 z-40 hidden md:inline-flex rounded-full bg-black/80 px-3 py-2 text-white shadow hover:bg-black"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}
