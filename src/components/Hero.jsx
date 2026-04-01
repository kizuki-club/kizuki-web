import './Hero.css';

const heroIllustration = 'https://www.figma.com/api/mcp/asset/4bab14f3-f6c7-4917-99c7-81e8605853c9';
const arrowIcon = 'https://www.figma.com/api/mcp/asset/56340f10-a835-452c-ad50-98761a083e6d';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__heading">
          Find the people who have always been looking for you.
        </h1>
        <p className="hero__subheading">
          Kizuki connects creators, artists, and skilled individuals based on
          genuine compatibility, not just keywords or profiles.
        </p>
        <a href="#waitlist" className="hero__cta">
          Join the waiting list
          <img src={arrowIcon} alt="" className="hero__cta-icon" />
        </a>
      </div>
      <div className="hero__illustration">
        <img src={heroIllustration} alt="Creative people collaborating" />
      </div>
    </section>
  );
}
