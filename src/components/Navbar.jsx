import './Navbar.css';

const logoIcon  = 'https://www.figma.com/api/mcp/asset/4e024152-b162-4576-836e-51044039d6f4';
const logoText  = 'https://www.figma.com/api/mcp/asset/f9ca2eb1-8a10-404d-a4d9-81b320c5c523';
const ctaButton = 'https://www.figma.com/api/mcp/asset/6c0c9ce9-aea5-42b3-a285-44843ffaa0a7';

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="navbar__logo">
        <img src={logoIcon} alt="" className="navbar__logo-icon" />
        <img src={logoText} alt="Kizuki" className="navbar__logo-wordmark" />
      </a>
      <button className="navbar__cta" aria-label="Join the waiting list">
        <img src={ctaButton} alt="Join the waiting list" />
      </button>
    </nav>
  );
}
