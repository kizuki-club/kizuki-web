import './ValueProposition.css';

const mascotIcon = 'https://www.figma.com/api/mcp/asset/00246ca6-def0-493d-a2e9-0c6792bfa654';

export default function ValueProposition() {
  return (
    <section className="value-prop">
      <div className="value-prop__inner">
        <img src={mascotIcon} alt="Kizuki mascot" className="value-prop__mascot" />
        <h2 className="value-prop__heading">
          More than networking.<br />
          True <span className="highlight">collaboration</span>.
        </h2>
        <p className="value-prop__description">
          In a world of superficial connections, Kizuki helps you find
          collaborators who truly match your <strong>style</strong>,{' '}
          <strong>goals</strong>, and <strong>creative energy</strong>.
        </p>
        <p className="value-prop__supporting">
          No more endless scrolling or hoping for the right match—our intelligent
          platform brings the right people directly to you.
        </p>
      </div>
    </section>
  );
}
