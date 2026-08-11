import { useEffect, useState } from "react";

const ROLES = ["Full Stack Developer", "Backend Developer", "Software Engineer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  // simple typewriter effect cycling through role titles
  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = deleting ? 35 : 65;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (typed.length < current.length) {
          setTyped(current.slice(0, typed.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        if (typed.length > 0) {
          setTyped(current.slice(0, typed.length - 1));
        } else {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [typed, deleting, roleIndex]);

  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">01 whoami</p>
          <h1 className="hero__name">Deepti S</h1>
          <p className="hero__role mono">
            {typed}
            <span className="hero__cursor">|</span>
          </p>
          <p className="hero__desc">
            B.Tech graduate who enjoys building practical, working software —
            web applications, backend systems, REST APIs, and the databases
            that hold it all together. Comfortable across the stack, from
            React interfaces to Node.js services.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="/resume.pdf" download className="btn btn-outline">
              Download Resume
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <div className="hero__social">
            <a
              href="https://github.com/sdeepti2136"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <GithubIcon />
            </a>
            <a
              href="https://linkedin.com/in/deepti-sakanti"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>

        {/* Signature element: hero framed as a code editor window */}
        <div className="hero__editor" aria-hidden="true">
          <div className="editor__titlebar">
            <span className="editor__dot editor__dot--red" />
            <span className="editor__dot editor__dot--yellow" />
            <span className="editor__dot editor__dot--green" />
            <span className="editor__tab mono">about-me.js</span>
          </div>
          <pre className="editor__code mono">
<code>{`const developer = {
  name: "Deepti S",
  based_in: "Hyderabad, India",
  education: "B.Tech, CSE",

  stack: [
    "React", "Node.js",
    "Express.js", "MongoDB",
    "PostgreSQL", "AWS"
  ],

  currentlyLookingFor: "SDE role",
  opensToRelocate: true,
};

export default developer;`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.19 1.78 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .32.2.67.8.56A10.51 10.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}
