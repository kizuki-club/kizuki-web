import './CollaborationFlows.css';

const imgCenter    = 'https://www.figma.com/api/mcp/asset/7d9d7c85-afa5-43f9-a580-bfd1ef59b1be';
const imgPlane     = 'https://www.figma.com/api/mcp/asset/6b5d5996-04a4-4e01-96b1-682e44f3f411';
const imgLeft      = 'https://www.figma.com/api/mcp/asset/c8493725-f16b-43b7-a536-d99582a91729';
const imgRight     = 'https://www.figma.com/api/mcp/asset/6491d634-3d86-4e8e-8b95-c758d0da576b';

export default function CollaborationFlows() {
  return (
    <section className="collab">
      <h2 className="collab__heading">
        COLLABORATION<br />
        <span className="dark">FLOWS</span>
      </h2>
      <p className="collab__subtitle">Collaborate effortlessly. All in one space.</p>

      <div className="collab__illustrations">
        <img src={imgLeft}   alt="" className="collab__img-left" />
        <img src={imgPlane}  alt="" className="collab__plane-left" />
        <img src={imgCenter} alt="" className="collab__img-center" />
        <img src={imgPlane}  alt="" className="collab__plane-right" />
        <img src={imgRight}  alt="" className="collab__img-right" />
      </div>

      <p className="collab__footer-text">
        Message, share, plan. No more <strong>switching apps</strong>.
      </p>
    </section>
  );
}
