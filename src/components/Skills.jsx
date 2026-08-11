import { useReveal } from "../hooks/useReveal";

const CATEGORIES = [
  { title: "Programming", items: ["Python", "JavaScript"] },
  { title: "Frontend", items: ["HTML", "CSS", "React"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { title: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL"] },
  { title: "Tools & Cloud", items: ["Git", "GitHub", "AWS"] },
];

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="eyebrow">03 skills</p>
        <h2 className="section-title">Skills</h2>
        <p className="section-sub">
          Technologies I've used in coursework, projects, and my internship.
        </p>

        <div ref={ref} className="reveal skills__grid">
          {CATEGORIES.map((cat) => (
            <div key={cat.title} className="skills__card">
              <h3 className="skills__cat-title mono">{cat.title}</h3>
              <div className="skills__tags">
                {cat.items.map((item) => (
                  <span key={item} className="skills__tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
