import { useReveal } from "../hooks/useReveal";

const HIGHLIGHTS = [
  { label: "Education", value: "B.Tech, Computer Science & Engineering" },
  { label: "Internship", value: "Software Engineer Intern, Shnoor International LLC" },
  { label: "Focus", value: "Full-stack development, backend systems & REST APIs" },
  { label: "Interests", value: "Database design, authentication, real-time features" },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="section">
      <div className="container">
        <p className="eyebrow">02 about</p>
        <h2 className="section-title">About Me</h2>
        <p className="section-sub">
          A quick summary of where I come from and what I like building.
        </p>

        <div ref={ref} className="reveal about__grid">
          <p className="about__bio">
            I'm a B.Tech graduate in Computer Science and Engineering, currently
            looking for my first full-time role as a Software Engineer or Full
            Stack Developer. During my internship as a Software Engineer Intern
            at Shnoor International LLC, I worked on a full-stack employee
            management platform — building backend APIs, integrating databases,
            and wiring up real-time features on the frontend.
          </p>
          <p className="about__bio">
            I like working across the stack: designing REST APIs and database
            schemas on the backend, and building the React interfaces that
            consume them on the frontend. I'm particularly interested in
            authentication, real-world data modelling, and building software
            that solves an actual problem rather than a toy version of one.
          </p>

          <div className="about__highlights">
            {HIGHLIGHTS.map((item) => (
              <div key={item.label} className="about__highlight">
                <span className="about__highlight-label mono">{item.label}</span>
                <span className="about__highlight-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
