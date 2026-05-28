export default function PrivacyPolicy() {
  return (
    <section className="legal-page container">
      <div className="legal-card glass-panel">
        <h1>Privacy Policy</h1>

        <p>
          At <strong>ColorWeave UI</strong>, your privacy matters to us. This
          Privacy Policy explains how we collect, use, and protect your
          information while using our platform.
        </p>

        <h2>1. Information We Collect</h2>

        <p>We may collect personal information such as:</p>

        <ul>
          <li>Name and email address</li>
          <li>Login credentials</li>
          <li>Usage analytics and browser information</li>
          <li>Payment-related information via Razorpay</li>
        </ul>

        <h2>2. How We Use Your Data</h2>

        <ul>
          <li>Provide platform functionality</li>
          <li>Improve user experience</li>
          <li>Process authentication and payments</li>
          <li>Enhance security and prevent abuse</li>
        </ul>

        <h2>3. Payment Security</h2>

        <p>
          Payments are securely processed using Razorpay. We do not store
          sensitive banking or card details.
        </p>

        <h2>4. Cookies</h2>

        <p>
          We may use cookies and local storage to improve sessions, preferences,
          and analytics.
        </p>

        <h2>5. Third-Party Services</h2>

        <p>
          We may use trusted services including Supabase, Razorpay, analytics
          tools, and hosting providers.
        </p>
      </div>
    </section>
  );
}
