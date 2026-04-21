export default function Terms() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-amber-50 text-gray-900 px-6 py-16">
      
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Careduel policies
        </h1>

        {/* 1. Privacy Policy */}
        <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">1. Privacy Policy</h2>
          <p className="mb-2">Effective Date: 20 April 2026</p>
          <p className="mb-4">
            CareDuel (“we”, “our”, “us”) collects personal data such as name, email, billing details, device information, cookies, and purchase history to process orders, deliver digital products, improve services, prevent fraud, and comply with legal obligations.
          </p>
          <p className="mb-4">We do not sell personal data.</p>

          <p className="font-semibold">Your Rights</p>
          <ul className="list-disc pl-6 mb-4">
            <li>access</li>
            <li>correction</li>
            <li>deletion</li>
            <li>portability</li>
            <li>withdrawal of consent</li>
          </ul>

          <p className="font-semibold">GDPR Basis</p>
          <ul className="list-disc pl-6">
            <li>contract performance</li>
            <li>consent</li>
            <li>legitimate interests</li>
            <li>legal obligations</li>
          </ul>
        </section>

        {/* 2. Terms of Use */}
        <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">2. Terms of Use / Terms of Sale</h2>
          <p className="mb-4">
            CareDuel sells digital educational and productivity products including AI prompt packs, templates, and downloadable resources.
          </p>
          <p className="mb-2">By purchasing, you agree:</p>
          <ul className="list-disc pl-6">
            <li>Products are licensed, not sold exclusively.</li>
            <li>Unauthorized resale, redistribution, copying, or sharing is prohibited.</li>
            <li>Access may be delivered instantly after payment.</li>
            <li>Results are not guaranteed.</li>
            <li>Users are responsible for how they use prompts and outputs.</li>
          </ul>
        </section>

        {/* 3. Refund Policy */}
        <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">3. Refund Policy (Digital Goods)</h2>
          <p className="mb-4">
            Due to the instant-access nature of downloadable digital products, refunds are generally not available once access or download has been granted, except where required by applicable law.
          </p>
          <p className="mb-2">
            If you experience technical issues or accidental duplicate billing, contact support within 7 days.
          </p>
          <p>Email: …..</p>
        </section>

        {/* 4. Disclaimer */}
        <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">4. Earnings / Results Disclaimer</h2>
          <p>
            CareDuel products are educational tools. We do not guarantee income, business growth, productivity gains, or any specific results.
          </p>
          <p className="mt-2">
            Outcomes depend on user skill, effort, market conditions, and implementation.
          </p>
        </section>

        {/* 5. IP Policy */}
        <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">5. Intellectual Property Policy</h2>
          <p>
            All prompt packs, templates, graphics, branding, text, and materials remain the intellectual property of CareDuel unless otherwise stated.
          </p>
          <p className="mt-2">
            Users receive a personal, non-transferable license unless commercial rights are expressly granted.
          </p>
        </section>

        {/* 6. Cookie Policy */}
        <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">6.Cookie policy</h2>
          <p>
            We do not use non-essential cookies for tracking or behavioural advertising.
          </p>
          <p className="mt-2">
            Third-party checkout providers may use their own cookies or similar technologies subject to their privacy policies.
          </p>
        </section>

        {/* Disclaimer */}
        <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Disclaimer</h2>
          <p>
            CareDuel products are educational tools. We do not guarantee income, success, or specific results.
          </p>
        </section>

        {/* Footer */}
        <section className="text-sm text-gray-600 text-center">
          <p>
            Taxes: Prices shown exclude any taxes that may apply at checkout based on customer location and payment processor rules. CareDuel is not currently VAT registered where not legally required.
          </p>
        </section>

      </div>

    </main>
  );
}