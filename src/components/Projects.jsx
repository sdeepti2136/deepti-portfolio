import { useReveal } from "../hooks/useReveal";

/**
 * NOTE FOR DEEPTI: the `github` and `demo` fields are left as `null`
 * on purpose — I don't have verified repo/deploy URLs for these projects.
 * Fill them in below and the buttons will activate automatically.
 * Projects marked `needsDetail: true` only have the feature list you
 * gave me — add a short real description before this goes live.
 */
const PROJECTS = [
  {
    title: "Job Portal",
    description:
      "A full-stack job portal where users can register, browse job listings, and submit applications, backed by REST APIs and a database for storing users, jobs, and applications.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    features: [
      "User authentication",
      "Job listings & search",
      "Job applications",
      "Backend REST APIs",
      "Database integration",
    ],
    github: null,
    demo: null,
    needsDetail: false,
  },
  {
    title: "Search Engine",
    description:
      "A search engine built over a structured dataset of records, allowing users to query and retrieve relevant results with ranking logic to surface the best matches first.",
    tech: ["Python"],
    features: [
      "Search over structured records",
      "Custom ranking logic",
      "Query handling & result retrieval",
    ],
    github: null,
    demo: null,
    needsDetail: false,
  },
  {
    title: "Import-Export System",
    description:
      "A system for managing import-export trade operations, tracking shipments, invoices, and general trade records to help businesses keep their cross-border transactions organized.",
    tech: [],
    features: [
      "Shipment tracking",
      "Invoice management",
      "Trade record keeping",
    ],
    github: null,
    demo: null,
    needsDetail: false,
  },
  {
    title: "AI in Manufacturing",
    description:
      "An academic ML/AI project applying machine learning techniques to a manufacturing use case. Add a short description of the specific problem it solves (e.g. defect detection, predictive maintenance) and what you built.",
    tech: ["Python"],
    features: [],
    github: "https://github.com/sdeepti2136/ai-manufacturing",
    demo: null,
    needsDetail: true,
  },
  {
    title: "Employee Management & HRMS Platform",
    description:
      "A full-stack HR and workspace platform with real-time chat, attendance tracking, and document management, built with a Node.js/Express/MongoDB backend and a React frontend.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
    features: [
      "Role-based authentication (admin & employee)",
      "Real-time chat & notifications (Socket.IO)",
      "Attendance with tap-in / tap-out tracking",
      "Leave management for managers",
      "Document management module",
      "Task assignment module",
    ],
    github: null,
    demo: null,
    needsDetail: false,
  },
  {
    title: "Fake Logo Detection",
    description:
      "A machine learning application that classifies uploaded logo images as genuine or counterfeit, with Grad-CAM visualizations to highlight the regions the model used to make its decision.",
    tech: ["Python", "TensorFlow / Keras", "React", "MySQL"],
    features: [
      "Image classification (genuine vs. counterfeit)",
      "Grad-CAM visual explanations",
      "JWT-based authentication",
      "React frontend for image upload & results",
    ],
    github: "https://github.com/sdeepti2136/fake-logo-detection",
    demo: null,
    needsDetail: false,
  },
];

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="eyebrow">05 projects</p>
        <h2 className="section-title">Projects</h2>
        <p className="section-sub">
          A selection of projects from my coursework and internship.
        </p>

        <div ref={ref} className="reveal projects__grid">
          {PROJECTS.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-card__head">
                <h3>{project.title}</h3>
                {project.needsDetail && (
                  <span className="project-card__flag mono">add details</span>
                )}
              </div>

              <p className="project-card__desc">{project.description}</p>

              {project.tech.length > 0 && (
                <div className="project-card__tech">
                  {project.tech.map((t) => (
                    <span key={t} className="project-card__tag">
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {project.features.length > 0 && (
                <ul className="project-card__features">
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              )}

              <div className="project-card__actions">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    GitHub
                  </a>
                ) : (
                  <span className="btn btn-disabled btn-sm" aria-disabled="true">
                    GitHub (add link)
                  </span>
                )}

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Live Demo
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
