import './Footer.css';

const logoIcon      = 'https://www.figma.com/api/mcp/asset/73f2bd55-a9bb-4101-8f4e-df6c697828a8';
const logoText      = 'https://www.figma.com/api/mcp/asset/3c15e899-6e8c-4334-9e8e-5f0a961b526e';
const iconInstagram = 'https://www.figma.com/api/mcp/asset/d790196e-6ac8-4168-bdbb-bd496b1e47b4';
const iconLinkedIn  = 'https://www.figma.com/api/mcp/asset/8b89277e-66d8-4247-9e15-1e32ac613814';
const iconX         = 'https://www.figma.com/api/mcp/asset/25729fee-fba4-4201-863a-ae60d0aa7225';
const iconTikTok    = 'https://www.figma.com/api/mcp/asset/6f1085f3-56e7-4092-a9f8-dfab5fb16eb8';
const iconDiscord   = 'https://www.figma.com/api/mcp/asset/89799147-26be-473b-a9fb-6930105d2055';

export default function Footer() {
  return (
    <footer className="footer">
      <a href="#" className="footer__logo">
        <img src={logoIcon} alt="" className="footer__logo-icon" />
        <img src={logoText} alt="Kizuki" className="footer__logo-text" />
      </a>

      <p className="footer__tagline">
        {'Made with ♥ in Berlin.\nConnecting creatives worldwide.'}
      </p>

      <p className="footer__copy">© 2025 Kizuki. All rights reserved.</p>

      <nav className="footer__nav">
        <div className="footer__nav-col">
          <a href="#">About us</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="footer__nav-col">
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <div className="footer__socials">
        <img src={iconInstagram} alt="Instagram" className="footer__social-icon" />
        <img src={iconLinkedIn}  alt="LinkedIn"  className="footer__social-icon" />
        <img src={iconX}         alt="X"         className="footer__social-icon" />
        <img src={iconTikTok}    alt="TikTok"    className="footer__social-icon" />
        <img src={iconDiscord}   alt="Discord"   className="footer__social-icon" />
      </div>
    </footer>
  );
}
