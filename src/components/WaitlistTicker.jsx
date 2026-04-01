import './WaitlistTicker.css';

const REPEAT = 8;

export default function WaitlistTicker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {Array.from({ length: REPEAT }).map((_, i) => (
          <span key={i} className="ticker__item">Join the waiting list</span>
        ))}
        {/* Duplicate for seamless loop */}
        {Array.from({ length: REPEAT }).map((_, i) => (
          <span key={`dup-${i}`} className="ticker__item">Join the waiting list</span>
        ))}
      </div>
    </div>
  );
}
