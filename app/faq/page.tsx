export default function FAQ() {
  return (
    <main className="min-h-screen bg-white text-[#0B1C2C] px-6 py-20">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          FAQ
        </h1>

        {/* FAQ Container */}
        <div className="space-y-6">

          {/* Item */}
          <div className="border rounded-xl p-6 shadow-sm">
            <p className="font-semibold text-lg mb-2">
              Q: How does delivery work?
            </p>
            <p className="text-gray-700">
              Instant. Buy → download PDF + Notion link immediately.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <p className="font-semibold text-lg mb-2">
              Q: Do the prompts work with any AI?
            </p>
            <p className="text-gray-700">
              Yes – optimized for any major AI and others.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <p className="font-semibold text-lg mb-2">
              Q: Is there a guarantee?
            </p>
            <p className="text-gray-700">
              7 days. If you don’t see better results, refund no questions.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <p className="font-semibold text-lg mb-2">
              Q: Can I use these for my business?
            </p>
            <p className="text-gray-700">
              Absolutely. Commercial use allowed.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <p className="font-semibold text-lg mb-2">
              Q: What if I need help?
            </p>
            <p className="text-gray-700">
              Simple guide included. Support via email.
            </p>
          </div>

        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <a
            href="/"
            className="inline-block bg-[#0B1C2C] text-white px-6 py-3 rounded-lg"
          >
            Back to Home
          </a>
        </div>

      </div>

    </main>
  );
}