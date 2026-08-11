export default function Resume() {
  return (
    <section id="resume" className="section">
      <div className="container resume__wrap">
        <div className="resume__card">
          <p className="eyebrow">07 resume</p>
          <h2 className="section-title resume__title">
            Want to know more about my experience?
          </h2>
          <p className="section-sub resume__sub">
            Grab a copy of my resume for the full picture — education,
            internship, projects, and skills in one place.
          </p>
          <a href="/resume.pdf" download className="btn btn-primary">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
