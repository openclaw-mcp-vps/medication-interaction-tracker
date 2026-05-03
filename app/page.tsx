export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Family Medication Safety
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Stop Dangerous Drug Interactions Before They Happen
        </h1>
        <p className="text-lg text-[#8b949e] mb-10 max-w-xl mx-auto">
          Track every medication your elderly relatives take. Get instant alerts when a new prescription creates a dangerous combination — before it reaches the pharmacy.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-xl transition-colors duration-200"
        >
          Start Protecting Your Family
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">$11/mo · Cancel anytime · Setup in 2 minutes</p>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">💊</div>
            <h3 className="font-semibold text-white mb-1">Track All Medications</h3>
            <p className="text-sm text-[#8b949e]">Add every prescription, OTC drug, and supplement for each family member in one place.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">⚠️</div>
            <h3 className="font-semibold text-white mb-1">Instant Interaction Alerts</h3>
            <p className="text-sm text-[#8b949e]">Our drug interaction engine flags dangerous combinations the moment you add a new medication.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📱</div>
            <h3 className="font-semibold text-white mb-1">Email & SMS Alerts</h3>
            <p className="text-sm text-[#8b949e]">Get notified immediately — even when you're not logged in — so nothing slips through the cracks.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, Transparent Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Family Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$11</div>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {["Unlimited family members","Real-time drug interaction checks","Email & SMS alerts","Medication history & reports","Priority support"].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors duration-200"
          >
            Get Started Now
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">No contracts. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How accurate are the drug interaction checks?</h3>
            <p className="text-sm text-[#8b949e]">We use a clinically-validated drug interaction database updated daily, covering over 20,000 medications and 100,000+ known interactions. Always consult your pharmacist or doctor for final decisions.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I manage multiple family members?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Your plan covers unlimited family members. Add profiles for parents, grandparents, or anyone you care for — each with their own medication list and alert settings.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my family's health data private and secure?</h3>
            <p className="text-sm text-[#8b949e]">Absolutely. All data is encrypted at rest and in transit. We never sell or share your information. You can delete your data at any time from your account settings.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} MedGuard. Not a substitute for professional medical advice.
      </footer>
    </main>
  );
}
