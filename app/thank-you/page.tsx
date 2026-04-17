export default function ThankYou() {
  return (
    <main className="min-h-screen bg-white text-[#0B1C2C] flex items-center justify-center px-6">

      <div className="max-w-2xl text-center">

        {/* Success Message */}
        <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">
          Purchase Successful
        </p>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
          Upgrade to Full Arsenal for just $60 more (save $14) – instant access.
        </h1>

        {/* Supporting Line (subtle, not rewriting core copy) */}
        <p className="text-gray-600 mb-8">
          Unlock all remaining Duel Packs and maximize your results instantly.
        </p>

        {/* CTA */}
        <a
          href="https://payhip.com/b/6GgyN"
          className="inline-block bg-[#0B1C2C] text-white px-10 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition"
        >
          Upgrade Now
        </a>

        {/* Trust line */}
        <p className="mt-6 text-sm text-gray-500">
          Instant access • One-time payment • No subscription
        </p>

      </div>

    </main>
  );
}