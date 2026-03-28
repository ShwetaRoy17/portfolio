import { useEffect, useMemo, useState } from "react";
import { profile, projects } from "../../data/data";

const VISIBLE_COUNT = 4;

export default function Projects() {
    const [rotation, setRotation] = useState(0);
    const [paused, setPaused] = useState(false);
    const [lockedRotation, setLockedRotation] = useState(null);
    const [startIndex, setStartIndex] = useState(0);

    const showControls = projects.length > VISIBLE_COUNT;
    useEffect(() => {
        if (paused || lockedRotation !== null) return undefined;

        const interval = setInterval(() => {
            setRotation((prev) => prev + 0.45);
        }, 30);

        return () => clearInterval(interval);
    }, [paused, lockedRotation]);


    const visibleProjects = useMemo(() => {
        const items = [];

        for (let i = 0; i < Math.min(VISIBLE_COUNT, projects.length); i += 1) {
            const index = (startIndex + i) % projects.length;
            items.push(projects[index]);
        }

        return items;
    }, [startIndex]);
    const effectiveRotation = lockedRotation !== null ? lockedRotation : rotation;

    const beltProjects = useMemo(() => {
        const total = visibleProjects.length;
        const step = 360 / total;

        return visibleProjects.map((project, index) => ({
            ...project,
            angle: index * step + effectiveRotation,
        }));
    }, [visibleProjects, effectiveRotation]);

    const goNext = () => {
        setStartIndex((prev) => (prev + 1) % projects.length);
    };

    const goPrev = () => {
        setStartIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const handleCardMouseEnter = (angle) => {
        const normalized = ((angle % 360) + 360) % 360;
        setLockedRotation(rotation - normalized);
        setPaused(true);
    };

    const handleCardMouseLeave = () => {
        setLockedRotation(null);
        setPaused(false);
    };


    return (
        <section id="projects">
            <div className="projects-header-row reveal">
                <div>
                    <div className="s-tag">Projects</div>
                    <h2 className="s-h2">
                        Things I've <em>built.</em>
                    </h2>
                    <p className="s-desc">
                        A selection of projects that reflect hands-on experience in backend engineering,
                        systems programming, concurrency, distributed design, and research-driven problem solving.
                    </p>
                </div>

                {showControls ? (
                    <div className="project-controls">
                        <button type="button" className="project-arrow" onClick={goPrev} aria-label="Previous projects">
                            ←
                        </button>
                        <button type="button" className="project-arrow" onClick={goNext} aria-label="Next projects">
                            →
                        </button>
                    </div>
                ) : null}
            </div>

            <div
                className="project-belt-wrap reveal"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                <div className="project-belt-scene">
                    <div className="project-belt-track">
                        {beltProjects.map((project) => {
                            const normalized = ((project.angle % 360) + 360) % 360;
                            const isFront = normalized > 315 || normalized < 45;

                            return (
                                <article
                                    key={`${project.title}-${startIndex}`}
                                    className={`belt-card ${isFront ? "is-front" : ""}`}
                                    onMouseEnter={() => handleCardMouseEnter(project.angle)}
                                    onMouseLeave={handleCardMouseLeave}
                                    style={{
                                        transform: `rotateY(${project.angle}deg) translateZ(360px)`,
                                    }}
                                >

                                    <div className="belt-card-inner">
                                        <div className="proj-thumb" style={{ background: project.background }}>
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
                Hover to pause. Use arrows to explore more projects.
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
