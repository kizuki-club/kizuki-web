import './ProfileSection.css';

const sketchIllustration = 'https://www.figma.com/api/mcp/asset/06f0a961-4eed-474b-a838-666c798d74a8';
const dotIcon = 'https://www.figma.com/api/mcp/asset/aa964eef-0323-4ff2-b38e-4e9de1d6c7ac';
const starIcon = 'https://www.figma.com/api/mcp/asset/3816760d-9b64-4488-b98e-3186ac2d087d';

const tags = [
  'PRODUCER',
  'MODEL',
  'VISUAL ARTIST',
  'PHOTOGRAPHER',
  'UX/UI',
  'PRODUCT DESIGNER',
  'BLOGGERS',
  'FITNESS',
];

export default function ProfileSection() {
  return (
    <section className="profile">
      <h2 className="profile__heading">
        YOUR<br />
        ALL-IN-ONE <span className="highlight">PROFILE</span>
      </h2>

      <div className="profile__card">
        <div className="profile__tags">
          {tags.map((tag) => (
            <span key={tag} className="profile__tag">
              {tag}
              <img src={dotIcon} alt="" className="profile__tag-dot" />
            </span>
          ))}
        </div>

        <div className="profile__illustration">
          <img src={sketchIllustration} alt="Profile illustration" />
        </div>

        <p className="profile__card-caption">
          Show your <strong>style</strong>, <strong>goals</strong>, and what
          makes you <strong>unique</strong>.
        </p>
      </div>

      <div className="profile__connect">
        <p className="profile__connect-text">
          Connect and communicate{' '}
          <span className="seamlessly">seamlessly</span>.
        </p>
        <img src={starIcon} alt="" className="profile__star" />
      </div>
    </section>
  );
}
