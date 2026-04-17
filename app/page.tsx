'use client';

import { useEffect, useState } from "react";

export default function Home() {

  const [time, setTime] = useState(86400);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((t) => t > 0 ? t - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(time / 3600);

  return (
    <main className="bg-white text-[#0B1C2C]">

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Duel Your Limits – British-Engineered AI Prompt Packs That Deliver Real Results
          </h1>

          <p className="text-lg md:text-xl mb-10 text-gray-700 max-w-3xl mx-auto">
            Stop wasting hours guessing what to ask AI. Get 150+ proven, battle-tested prompts for wealth, productivity and business. Instant download. Used by sharp professionals worldwide.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="https://payhip.com/b/PlRGr" className="bg-[#0B1C2C] text-white px-10 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition">
              Get Wealth Duel Pack – Only $37
            </a>

            <a href="https://payhip.com/b/6GgyN" className="bg-[#D4AF37] text-black px-10 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition">
              Get Full Arsenal Bundle – Only $97 (Best Value)
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-600">
            Instant Access • Stripe Secure • 7-Day Money-Back Guarantee • Used by US, UK professionals, NRIs, Indian Diaspora chasing premium tools
          </p>

          <p className="mt-4 text-red-600 font-semibold text-lg">
            Launch pricing ends in {hours} hours
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Tired of AI giving you mediocre outputs?
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">
            <li>- You type vague prompts and get generic garbage.</li>
            <li>- Hours lost tweaking and still no breakthrough results.</li>
            <li>- Competitors using smarter systems pull ahead while you stay stuck.</li>
            <li>- The real power of AI stays locked behind bad prompting.</li>
          </ul>

          <p className="mt-8 font-semibold text-lg">
            If you’re serious about winning in 2026, this ends today.
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-gray-800">
            CareDuel gives you British-engineered “Duel Packs” – curated libraries of prompts that force AI to deliver high-output results fast.
          </p>
          <p className="mt-6 font-semibold text-lg">
            No fluff. No trial-and-error. Just copy, paste, win.
          </p>
        </div>
      </section>

      {/* PACKS */}
      <section className="py-24 px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-3">Wealth Duel Pack ($37)</h3>
            <p className="text-gray-700">
              60+ prompts to crush money blocks, negotiate better deals, spot opportunities, build income systems, and force AI to act as your ruthless financial advisor.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-3">Productivity Duel Pack ($37)</h3>
            <p className="text-gray-700">
              50+ prompts to destroy procrastination, design ruthless daily systems, eliminate distractions, and make AI your 24/7 focus enforcer.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-3">Business Duel Pack ($37)</h3>
            <p className="text-gray-700">
              60+ prompts to outsmart competition, scale offers, write high-converting copy, research markets, and turn ideas into revenue machines.
            </p>
          </div>

        </div>
      </section>

      {/* BUNDLE */}
      <section className="text-center py-12">
        <h3 className="text-xl font-bold max-w-2xl mx-auto">
          Full Arsenal Bundle ($97) – All three packs + bonus customization prompts. Best value. Save $14.
        </h3>
      </section>

      {/* WHY */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-4 text-lg text-gray-700">
            <li>- Created with 2026 best practices – prompts that actually work on leading AI models.</li>
            <li>- Instant download + Notion template (duplicate and use forever).</li>
            <li>- British premium quality trusted by global users including Indian diaspora.</li>
            <li>- Results in minutes, not months.</li>
          </ul>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="text-center py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto space-y-4 text-lg text-gray-800">
          <p>“These prompts 3x’d my side hustle output in one weekend.” – Real buyer</p>
          <p>“Finally making money with AI instead of just playing with it.” – Real buyer</p>
        </div>
      </section>

      {/* PRICING */}
      <section className="text-center py-20">
        <div className="space-y-3 text-lg">
          <p>Single Pack: $37 each</p>
          <p>Full Arsenal (All 3): $97 → Save $14 + bonus prompts</p>
          <p className="text-red-600 font-semibold mt-4 text-lg">
            Price increases in {hours} hours
          </p>
        </div>
      </section>

      {/* FAQ LINK */}
      <section className="py-14 px-6 bg-gray-50 text-center">
        <div className="max-w-xl mx-auto border border-gray-200 rounded-xl p-6 shadow-sm">

          <p className="text-sm text-gray-500 mb-2">
            Still have questions?
          </p>

          <a
            href="/faq"
            className="inline-block text-[#0B1C2C] font-semibold underline text-lg hover:opacity-80 transition"
          >
            View FAQ
          </a>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-center py-24 bg-[#0B1C2C] text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to duel your old limits?
        </h2>

        <p className="mb-10 text-lg">
          Choose your weapon and start winning today.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="https://payhip.com/b/PlRGr" className="bg-white text-black px-10 py-4 rounded-xl font-semibold">
            Get Wealth Duel Pack – $37
          </a>

          <a href="https://payhip.com/b/6GgyN" className="bg-[#D4AF37] text-black px-10 py-4 rounded-xl font-semibold">
            Get Full Arsenal Bundle – $97 (Recommended)
          </a>
        </div>
      </section>

    </main>
  );
}