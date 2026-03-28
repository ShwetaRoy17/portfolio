import { useState } from "react";
import { experienceTabs } from "../../data/data";

export default function Experience() {
  const [activeTab, setActiveTab] = useState(experienceTabs[0]?.id ?? "work");
  const activePanel = experienceTabs.find((tab) => tab.id === activeTab);

  return (
    <section id="experience">
      <div className="s-tag reveal">Experience</div>
      <h2 className="s-h2 reveal">
        <em>Where</em> I've grown.
      </h2>
      <p className="s-desc reveal">
        Professional work, research depth, and project-driven engineering that shaped my backend
        and systems perspective.
      </p>

      <div className="exp-layout">
        <div className="exp-tabs reveal">
          {experienceTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`exp-tab ${activeTab === tab.id ? "on" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        <div className="reveal">
          {activePanel ? (
            <div className="exp-panel on">
              <div className="ep-date">{activePanel.date}</div>
              <div className="ep-role">{activePanel.role}</div>
              <div className="ep-co">
                {activePanel.companyLink ? (
                  <a href={activePanel.companyLink} target="_blank" rel="noreferrer">
                    {activePanel.company}
                  </a>
                ) : (
                  activePanel.company
                )}
              </div>

              <ul className="ep-list">
                {activePanel.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="ep-chips">
                {activePanel.chips.map((chip) => (
                  <span key={chip} className="ep-chip">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
