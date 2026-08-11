import { useState } from "react";

/**
 * This form does NOT send email on its own — there's no backend here to send it.
 * On submit, it opens the user's email client with the message pre-filled via a
 * mailto: link. That's the simplest option with zero setup and no risk of a fake
 * "your message was sent" confirmation that goes nowhere.
 *
 * If you want messages to submit without opening an email client, the simplest
 * secure upgrade is a form-backend service like Formspree (formspree.io) or
 * EmailJS — both let you POST this form directly to them with no server of your
 * own, and neither requires exposing any secret key in this frontend code.
 */
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "website visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:sdeepthi780@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="eyebrow">08 contact</p>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-sub">
          Have a role that fits, or just want to say hi? Reach out.
        </p>

        <div className="contact__grid">
          <ul className="contact__info">
            <li>
              <span className="mono">Email</span>
              <a href="mailto:sdeepthi780@gmail.com">sdeepthi780@gmail.com</a>
            </li>
            <li>
              <span className="mono">Phone</span>
              <a href="tel:+918328627453">+91 83286 27453</a>
            </li>
            <li>
              <span className="mono">Location</span>
              <span>Hyderabad, Telangana, India</span>
            </li>
            <li>
              <span className="mono">LinkedIn</span>
              <a href="https://linkedin.com/in/deepti-sakanti" target="_blank" rel="noreferrer">
                linkedin.com/in/deepti-sakanti
              </a>
            </li>
            <li>
              <span className="mono">GitHub</span>
              <a href="https://github.com/sdeepti2136" target="_blank" rel="noreferrer">
                github.com/sdeepti2136
              </a>
            </li>
          </ul>

          <form className="contact__form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to say?"
            />

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
