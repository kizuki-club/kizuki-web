import './FinalCTA.css';

export default function FinalCTA() {
  return (
    <section className="final-cta" id="waitlist">
      <h2 className="final-cta__heading">
        Your next great <span className="highlight">collaboration</span> is
        waiting to happen.
      </h2>
      <p className="final-cta__subheading">
        Be among the first to experience a new way of finding creative partners.
      </p>
      <form className="final-cta__form" onSubmit={(e) => e.preventDefault()}>
        <input
          className="final-cta__input"
          type="email"
          placeholder="email"
          aria-label="Email address"
        />
        <button type="submit" className="final-cta__submit">
          Join the Kizuki community
        </button>
        <span className="final-cta__terms">Accept terms of conditions</span>
      </form>
    </section>
  );
}
