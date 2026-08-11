import { useReveal } from "../hooks/useReveal";

const RESPONSIBILITIES = [
  "Built and maintained full-stack features across a Node.js/Express backend and a React frontend.",
  "Designed and integrated REST APIs connecting the frontend to a MongoDB-backed data layer.",
  "Implemented authentication flows to separate admin and employee access within the platform.",
  "Built an employee management module with dynamic, computed employee fields.",
  "Developed an attendance tracking system with tap-in / tap-out and break management.",
  "Built a real-time chat and notifications system using Socket.IO, including a document management module.",
];

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="eyebrow">04 experience</p>
        <h2 className="section-title">Experience</h2>
        <p className="section-sub">Where I've applied what I've learned.</p>

        <div ref={ref} className="reveal exp__card">
          <div className="exp__header">
            <div>
              <h3 className="exp__role">Software Engineer Intern</h3>
              <p className="exp__company mono">Shnoor International LLC · Remote</p>
            </div>
            <span className="exp__period mono">Mar 2026 – Jun 2026</span>
          </div>

          <ul className="exp__list">
            {RESPONSIBILITIES.map((item) => (
              <li key={item}>
                <span className="exp__bullet">▹</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
