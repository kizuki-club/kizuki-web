import { useState } from 'react';
import './FAQ.css';

const starIcon = 'https://www.figma.com/api/mcp/asset/91005d99-4d60-4816-885d-015270366747';

const faqs = [
  {
    q: "How does Kizuki's recommendation algorithm work?",
    a: "Kizuki uses a compatibility engine that goes beyond simple keyword matching — it analyses your creative style, goals, work history, and preferred collaboration methods to surface genuinely aligned matches.",
  },
  {
    q: 'Is Kizuki free to use?',
    a: 'We plan to offer a free tier with core features. Premium plans with advanced matching and project tools will be available at launch.',
  },
  {
    q: 'What creative fields does Kizuki support?',
    a: 'Music, photography, visual art, fashion, design, film, writing, fitness, and more — if you create, Kizuki is for you.',
  },
  {
    q: 'When will Kizuki launch?',
    a: 'We are currently building toward our beta launch. Join the waiting list to be among the first to access the platform.',
  },
  {
    q: 'How is Kizuki different from other networking platforms?',
    a: "Kizuki is built exclusively for creatives and focuses on deep compatibility rather than follower counts or vanity metrics. We care about the quality of your connections, not the quantity.",
  },
  {
    q: 'How do I build my profile on Kizuki?',
    a: 'Your profile showcases your skills, creative style, portfolio pieces, availability, and goals — giving potential collaborators everything they need to know at a glance.',
  },
  {
    q: 'Can I use Kizuki for both professional and personal creative projects?',
    a: 'Absolutely. Whether you are working on a commercial project or a passion project, Kizuki helps you find the right people for both.',
  },
  {
    q: 'Is Kizuki available internationally?',
    a: 'Yes — Kizuki is built for a global community of creators from day one.',
  },
  {
    q: 'How does Kizuki handle privacy and data protection?',
    a: 'We take privacy seriously and comply with GDPR and global data protection standards. You are always in control of what you share.',
  },
  {
    q: "I'm part of a creative team or studio. Can we use Kizuki as a group?",
    a: 'Team and studio profiles are on our roadmap. Stay tuned for updates.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq">
      <img src={starIcon} alt="" className="faq__star" />
      <h2 className="faq__label">FAQs</h2>
      <p className="faq__sublabel">Frequently Asked Questions</p>

      <ul className="faq__list">
        {faqs.map((item, i) => (
          <li key={i} className="faq__item">
            <button className="faq__question" onClick={() => toggle(i)}>
              <span className="faq__question-text">{item.q}</span>
              <span className={`faq__icon${openIndex === i ? ' faq__icon--open' : ''}`}>+</span>
            </button>
            <p className={`faq__answer${openIndex === i ? ' faq__answer--open' : ''}`}>
              {item.a}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
