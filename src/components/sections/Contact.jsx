import { contactLinks } from "../../data/data";

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-grid">
        <div className="reveal">
          <div className="s-tag">Contact</div>
          <h2 className="cl-h2">
            Let's build <em>something strong.</em>
          </h2>
          <p className="cl-p">
            I'm open to backend, systems, and software engineering opportunities where I can
            contribute to scalable platforms, real-time systems, and performance-focused products.
          </p>

          <div className="contact-links">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="cl-link"
              >
                <span className="cl-link-icon">{link.icon}</span>
                <div>
                  <span className="cl-link-l">{link.label}</span>
                  <span className="cl-link-v">{link.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="reveal">
          <div className="contact-form">
            <div className="cf-h">Send a message</div>

            <div className="cf-row">
              <label className="cf-lbl">Your Name</label>
              <input className="cf-input" type="text" placeholder="Jane Smith" />
            </div>

            <div className="cf-row">
              <label className="cf-lbl">Email</label>
              <input className="cf-input" type="email" placeholder="jane@company.com" />
            </div>

            <div className="cf-row">
              <label className="cf-lbl">Subject</label>
              <input className="cf-input" type="text" placeholder="Role · Collaboration · Project" />
            </div>

            <div className="cf-row">
              <label className="cf-lbl">Message</label>
              <textarea className="cf-area" placeholder="Tell me about the opportunity or problem you're solving..." />
            </div>

            <button className="cf-submit" type="button">
              Send Message →
            </button>

            <div className="cf-note">Usually responds within 24 hours.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
