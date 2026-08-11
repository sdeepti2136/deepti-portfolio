import { useReveal } from "../hooks/useReveal";

const CERTIFICATIONS = [
  { name: "Technology & Consulting Job Simulation", issuer: "Deloitte", year: "2024" },
  { name: "AWS", issuer: "Amazon", year: "2024" },
  { name: "JavaScript Essentials", issuer: "PrepInsta", year: "2025" },
  { name: "Git & GitHub", issuer: "Coursera", year: "2025" },
  { name: "SQL", issuer: "PrepInsta", year: "2025" },
];

export default function Certifications() {
  const ref = useReveal();

  return (
    <section id="certifications" className="section">
      <div className="container">
        <p className="eyebrow">06 certifications</p>
        <h2 className="section-title">Certifications</h2>
        <p className="section-sub">Courses and simulations I've completed.</p>

        <ol ref={ref} className="reveal cert__timeline">
          {CERTIFICATIONS.map((cert) => (
            <li key={cert.name} className="cert__item">
              <span className="cert__year mono">{cert.year}</span>
              <div className="cert__body">
                <h3 className="cert__name">{cert.name}</h3>
                <p className="cert__issuer">{cert.issuer}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
