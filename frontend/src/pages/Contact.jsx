import { useState } from "react";
import { sendContactMessage } from "../api.js";
import { SendIcon, GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "../components/Icons.jsx";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) =>
    setForm((current) => ({ ...current, [e.target.name]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      await sendContactMessage(form);
      setStatus("sent");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  }

  return (
    <section className="page container contact-page">
      <div className="page-hero">
        <div>
          <span className="section-kicker">CONTACT</span>
          <h1 className="page__title">
            Let's create
            <br />
            <span>something good.</span>
          </h1>
        </div>
        <p>Have an opportunity, project idea, or question? You can reach me directly.</p>
      </div>

      <div className="contact-grid">
        <form className="contact-form glass-card" onSubmit={handleSubmit}>
          <div className="form-heading">
            <span>DROP A MESSAGE</span>
            <h2>Tell me what's on your mind.</h2>
          </div>

          <label className="field">
            <span>Name</span>
            <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
          </label>

          <label className="field">
            <span>Email</span>
            <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" />
          </label>

          <label className="field">
            <span>Message</span>
            <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Write your message..." rows={5} />
          </label>

          <button className="btn btn--primary form-submit" type="submit" disabled={status === "sending"}>
            <SendIcon />
            <span>{status === "sending" ? "Sending..." : "Send message"}</span>
          </button>

          {status === "sent" && (
            <p className="form-note form-note--ok">Message sent successfully. Thank you! ✦</p>
          )}
          {status === "error" && <p className="form-note form-note--error">{errorMsg}</p>}
        </form>

        <aside className="contact-side">
          <div className="contact-intro">
            <span className="big-star">✦</span>
            <h2>Have a project<br />in mind?</h2>
            <p>I'm interested in hearing about projects, opportunities, and ideas.</p>
          </div>

          <div className="contact-details">
            <a href="mailto:premkumar2982003@gmail.com">
              <span className="contact-detail-label"><MailIcon /> Email</span>
              <strong>premkumar2982003@gmail.com</strong>↗
            </a>
            <a href="tel:+918248159019">
              <span className="contact-detail-label"><PhoneIcon /> Phone</span>
              <strong>+91 8248159019</strong>↗
            </a>
            <a href="https://linkedin.com/in/prem-kumar-ps0816" target="_blank" rel="noreferrer">
              <span className="contact-detail-label"><LinkedInIcon /> LinkedIn</span>
              <strong>prem-kumar-ps0816</strong>↗
            </a>
            <a href="https://github.com/premkumar29820" target="_blank" rel="noreferrer">
              <span className="contact-detail-label"><GitHubIcon /> GitHub</span>
              <strong>premkumar29820</strong>↗
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
