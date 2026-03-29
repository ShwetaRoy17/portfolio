import { experiences } from "../../data/data";

export default function Experience() {
  return (
    <section id="experience">
      <div className="s-tag reveal">Experience</div>
      <h2 className="s-h2 reveal">
        <em>Where</em> I've built.
      </h2>
      <p className="s-desc reveal">
        Professional experience across backend systems, streaming infrastructure,
        distributed engineering, and performance-focused software development.
      </p>

      <div className="experience-cards reveal">
        {experiences.map((item, index) => (
          <article className="experience-card" key={item.company}>
            <div className="experience-card-top">
              <div>
                <div className="experience-company">{item.company}</div>
                <div className="experience-location">{item.location}</div>
              </div>
              <div className="experience-index">0{index + 1}</div>
            </div>

            <div className="experience-timeline">{item.timeline}</div>

            <div className="experience-stack-label">Tech Stack</div>
            <div className="experience-stack">
              {item.stack.map((tech) => (
                <span key={tech} className="experience-chip">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
