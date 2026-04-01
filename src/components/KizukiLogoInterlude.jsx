import './KizukiLogoInterlude.css';

const logoMark = 'https://www.figma.com/api/mcp/asset/c1b18955-2915-493b-9637-dd5a982fc86e';

export default function KizukiLogoInterlude() {
  return (
    <section className="logo-interlude">
      <img src={logoMark} alt="Kizuki" className="logo-interlude__img" />
    </section>
  );
}
