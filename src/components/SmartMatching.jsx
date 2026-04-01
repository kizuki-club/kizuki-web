import './SmartMatching.css';

const sukiImg = 'https://www.figma.com/api/mcp/asset/18ef8e30-9a07-4db5-adc3-bb805a41351c';

function SearchIcon() {
  return (
    <svg
      className="smart-matching__search-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="22" y2="22" />
    </svg>
  );
}

export default function SmartMatching() {
  return (
    <section className="smart-matching">
      {/* Left — Suki */}
      <div className="smart-matching__suki-col">
        <p className="smart-matching__intro">
          Introducing <span className="suki-name">Suki</span>.
        </p>
        <p className="smart-matching__intro-sub">Your creative sidekick.</p>
        <div className="smart-matching__suki-wrapper">
          <img src={sukiImg} alt="Suki the fox mascot" className="smart-matching__suki-img" />
          <div className="smart-matching__bubble">
            <span className="smart-matching__bubble-text">
              Hey JHONN! What are you up today?
            </span>
          </div>
        </div>
      </div>

      {/* Right — Smart Matching */}
      <div className="smart-matching__match-col">
        <h2 className="smart-matching__heading">
          SMART <span className="highlight">MATCHING</span>
        </h2>
        <p className="smart-matching__subtitle">
          Filter by skills, style, availability, and more. Fast.
        </p>
        <div className="smart-matching__search">
          <SearchIcon />
          <span className="smart-matching__search-text">dancer</span>
        </div>
        <p className="smart-matching__skip">
          Skip <span className="highlight">endless DMs</span>.
        </p>
      </div>
    </section>
  );
}
