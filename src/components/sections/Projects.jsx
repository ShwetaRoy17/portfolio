import { useEffect, useMemo, useState } from "react";
import { profile, projects } from "../../data/data";

export default function Projects() {
  const [rotation, setRotation] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.4);
    }, 30);

    return () => clearInterval(interval);
  }, [paused]);

  const beltProjects = useMemo(() => {
    const total = projects.length;
    const step = 360 / total;

    return projects.map((project, index) => {
      const angle = index * step + rotation;
      return {
        ...project,
        angle,
      };
    });
  }, [rotation]);

  return (
    <section id="projects">
      <div className="s-tag reveal">Projects</div>

      <h2 className="s-h2 reveal">
        Things I've <em>built.</em>
      </h2>

      <p className="s-desc reveal">
        A selection of projects that reflect hands-on experience in backend engineering,
        systems programming, concurrency, distributed design, and research-driven problem solving.
      </p>

      <div
        className="project-belt-wrap reveal"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="project-belt-scene">
          <div className="project-belt-track">
            {beltProjects.map((project) => {
              const normalized = ((project.angle % 360) + 360) % 360;
              const isFront = normalized > 330 || normalized < 30;

              return (
                <article
                  key={project.title}
                  className={`belt-card ${isFront ? "is-front" : ""}`}
                  style={{
                    transform: `rotateY(${project.angle}deg) translateZ(420px)`,
                  }}
                >
                  <div className="belt-card-inner">
                    <div
                      className="proj-thumb"
                      style={{ background: project.background }}
                    >
                      {project.emoji}

                      <div className="proj-overlay">
                        {project.live ? (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="p-btn p-live"
                          >
                            Live ↗
                          </a>
                        ) : null}

                        <a
                          href={project.code}
                          target="_blank"
                          rel="noreferrer"
                          className="p-btn p-code"
                        >
                          Code
                        </a>
                      </div>
                    </div>

                    <div className="proj-body">
                      <div className="p-top">
                        <div className="p-name">{project.title}</div>
                        <span className="p-badge">{project.type}</span>
                      </div>

                      <p className="p-desc">{project.description}</p>

                      {project.highlights?.length ? (
                        <ul className="project-highlights">
                          {project.highlights.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : null}

                      <div className="p-tags">
                        {project.tags.map((tag) => (
                          <span key={tag} className="p-tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="p-footer">
                        {project.live ? (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="p-link"
                          >
                            Demo ↗
                          </a>
                        ) : null}

                        <a
                          href={project.code}
                          target="_blank"
                          rel="noreferrer"
                          className="p-link"
                        >
                          GitHub ↗
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <div className="projects-scroll-note reveal">
        Hover to pause the rotation and explore a project
      </div>

      <div style={{ textAlign: "center", marginTop: "44px" }}>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="btn-ghost"
        >
          All Repos on GitHub →
        </a>
      </div>
    </section>
  );
}
