import { useEffect, useRef } from 'react';
import './AboutUs.css';

const lines = [
  'Born in Berlin\'s creative scene,',
  'built for creators worldwide.',
  'Kizuki was founded by a team of artists, designers, and tech innovators who believe that the best ideas come from collaboration. We\'re building the platform we always wished existed.',
];

export default function AboutUs() {
  const lineRefs = useRef([]);

  useEffect(() => {
    const observers = lineRefs.current.map((el) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
          } else {
            // Remove so it un-highlights when scrolled past
            el.classList.remove('is-visible');
          }
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });

    return () => observers.forEach((obs) => obs && obs.disconnect());
  }, []);

  return (
    <section className="about">
      <div className="about__text">
        {lines.map((line, i) => (
          <span
            key={i}
            className="about__line"
            ref={(el) => (lineRefs.current[i] = el)}
          >
            {line}
          </span>
        ))}
      </div>
    </section>
  );
}
