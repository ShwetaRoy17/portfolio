import { useMemo, useState } from "react";
import { projects } from "../../data/data";

function getVisibleCount() {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth <= 700) return 1;
  if (window.innerWidth <= 1100) return 2;
  return 3;
}

export default function Projects() {
  const [page, setPage] = useState(0);
  const visibleCount = getVisibleCount();
  const totalPages = Math.ceil(projects.length / visibleCount);

  const pagedProjects = useMemo(() => {
    return Array.from({ length: totalPages }).map((_, pageIndex) => {
      const start = pageIndex * visibleCount;
      return projects.slice(start, start + visibleCount);
    });
  }, [visibleCount, totalPages]);

  const goPrev = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goNext = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  return (
    <section id="projects">
      <div className="projects-header-row reveal">
        <div>
          <div className="s-tag">Selected Work</div>
          <h2 className="s-h2">
            Things I've <em>built.</em>
          </h2>
          <p className="s-desc">
            A few projects across backend systems, distributed tooling, machine learning,
            and practical developer infrastructure.
          </p>
        </div>

        <div className="project-controls">
          <button
            type="button"
            className="project-arrow"
            onClick={goPrev}
            aria-label="Previous projects"
          >
            ←
          </button>
          <button
            type="button"
            className="project-arrow"
            onClick={goNext}
            aria-label="Next projects"
          >
            →
          </button>
        </div>
      </div>

      <div className="projects-carousel reveal">
        <div
          className="projects-track"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {pagedProjects.map((group, index) => (
            <div className="projects-page" key={index}>
              {group.map((project) => (
                <article className="project-card" key={project.name}>
                  <div className="proj-thumb">{project.icon}</div>

                  <div className="proj-body">
                    <div className="p-top">
                      <div className="p-name">{project.name}</div>
                      {project.badge ? <div className="p-badge">{project.badge}</div> : null}
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
                      {project.stack?.map((tag) => (
                        <span className="p-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="p-footer">
                      {project.live ? (
                        <a
                          className="p-link"
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live ↗
                        </a>
                      ) : null}

                      {project.code ? (
                        <a
                          className="p-link"
                          href={project.code}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Code ↗
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
