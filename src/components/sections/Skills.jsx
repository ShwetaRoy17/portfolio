import { useState } from "react";
import { skillGroups } from "../../data/data";
import TechGlobe from "../ui/TechGlobe";


const BAR_COLORS = {
  "sk-c1": "linear-gradient(90deg, transparent, #c8f135, transparent)",
  "sk-c2": "linear-gradient(90deg, transparent, #38d9f5, transparent)",
  "sk-c3": "linear-gradient(90deg, transparent, #ff7c9e, transparent)",
  "sk-c4": "linear-gradient(90deg, transparent, #9b8fff, transparent)",
  "sk-c5": "linear-gradient(90deg, transparent, #c8f135, transparent)",
  "sk-c6": "linear-gradient(90deg, transparent, #38d9f5, transparent)",
};

const CARDS_PER_PAGE = 3;

function ToolkitCard({ icon, title, className, items }) {
  return (
    <article className="toolkit-belt-card">
      <div
        className="toolkit-bar"
        style={{ background: BAR_COLORS[className] || BAR_COLORS.sk-c1 }}
      />
      <span className="toolkit-icon">{icon}</span>
      <div className="toolkit-title">{title}</div>

      <div className="toolkit-tags">
        {items.slice(0, 6).map((item) => (
          <span key={item} className="toolkit-tag">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Skills() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(skillGroups.length / CARDS_PER_PAGE);

  const goPrev = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goNext = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  return (
    <section id="skills">
      <div className="skills-shell reveal">
        <button
          type="button"
          className="skills-nav-arrow skills-nav-left"
          onClick={goPrev}
          aria-label="Previous skills"
        >
          ←
        </button>

        <div className="skills-main">
          <div className="skills-heading-block">
            <div className="s-tag">Skills & Stack</div>
            <h2 className="s-h2">
              My <em>toolkit.</em>
            </h2>
            <p className="s-desc">
              Technologies I use across backend engineering, systems programming,
              distributed systems, data systems, and applied research.
            </p>
          </div>
          <TechGlobe />

          <div className="toolkit-belt-wrap">
            <div
              className="toolkit-belt-track"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => {
                const start = pageIndex * CARDS_PER_PAGE;
                const pageItems = skillGroups.slice(start, start + CARDS_PER_PAGE);

                return (
                  <div className="toolkit-belt-page" key={pageIndex}>
                    {pageItems.map((skill) => (
                      <ToolkitCard
                        key={skill.title}
                        icon={skill.icon}
                        title={skill.title}
                        className={skill.className}
                        items={skill.items}
                      />
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <button
          type="button"
          className="skills-nav-arrow skills-nav-right"
          onClick={goNext}
          aria-label="Next skills"
        >
          →
        </button>
      </div>
    </section>
  );
}
