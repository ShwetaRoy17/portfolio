export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-single reveal">
        <div className="contact-intro">
          <div className="s-tag">Contact</div>
          <h2 className="cl-h2">
            Let's build <em>something strong.</em>
          </h2>
          <p className="cl-p">
            If you have a backend, systems, or platform engineering opportunity in mind,
            feel free to reach out. I’m open to discussing roles, collaborations, and
            interesting technical challenges.
          </p>
        </div>

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
            <textarea
              className="cf-area"
              placeholder="Tell me about the opportunity or technical problem you're solving..."
            />
          </div>

          <button className="cf-submit" type="button">
            Send Message →
          </button>

          <div className="cf-note">Usually responds within 24 hours.</div>
        </div>
      </div>
    </section>
  );
}
