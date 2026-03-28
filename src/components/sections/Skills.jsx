import { useMemo, useState } from "react";
import { skillGroups } from "../../data/data";

const BAR_COLORS = {
  "sk-c1": "linear-gradient(90deg, transparent, #c8f135, transparent)",
  "sk-c2": "linear-gradient(90deg, transparent, #38d9f5, transparent)",
  "sk-c3": "linear-gradient(90deg, transparent, #ff7c9e, transparent)",
  "sk-c4": "linear-gradient(90deg, transparent, #9b8fff, transparent)",
  "sk-c5": "linear-gradient(90deg, transparent, #c8f135, transparent)",
  "sk-c6": "linear-gradient(90deg, transparent, #38d9f5, transparent)",
};

const VISIBLE_COUNT = 3;

function ToolkitCard({ icon, title, className, items }) {
  const featured = items.slice(0, 6);

  return (
    <article className="toolkit-belt-card">
      <div
        className="toolkit-bar"
        style={{ background: BAR_COLORS[className], opacity: 0.7 }}
      />

      <span className="toolkit-icon">{icon}</span>
      <div className="toolkit-title">{title}</div>

      <div className="toolkit-tags">
        {featured.map((item) => (
          <span key={item} className="toolkit-tag">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Skills() {
  const [startIndex, setStartIndex] = useState(0);
  const showControls = skillGroups.length > VISIBLE_COUNT;

  const visibleSkills = useMemo(() => {
    const items = [];
    const total = Math.min(VISIBLE_COUNT, skillGroups.length);

    for (let i = 0; i < total; i += 1) {
      const index = (startIndex + i) % skillGroups.length;
      items.push(skillGroups[index]);
    }

    return items;
  }, [startIndex]);

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + skillGroups.length) % skillGroups.length);
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % skillGroups.length);
  };

  return (
    <section id="skills">
      <div className="skills-header-row reveal">
        <button
          type="button"
          className="skills-nav-arrow"
          onClick={prevSlide}
          aria-label="Previous skills"
          disabled={!showControls}
        >
          ←
        </button>

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

        <button
          type="button"
          className="skills-nav-arrow"
          onClick={nextSlide}
          aria-label="Next skills"
          disabled={!showControls}
        >
          →
        </button>
      </div>

      <div className="toolkit-belt-wrap reveal">
        <div className="toolkit-belt">
          {visibleSkills.map((skill) => (
            <ToolkitCard
              key={`${skill.title}-${startIndex}`}
              icon={skill.icon}
              title={skill.title}
              className={skill.className}
              items={skill.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
