import { heroPills, heroStats, profile } from "../../data/data";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-eyebrow hero-fade hero-fade-1">
            <span className="blink-dot"></span>
            {profile.role} · {profile.location}
          </div>

          <h1 className="hero-h1 hero-fade hero-fade-2">
            <span className="dim">{profile.heroTitle[0]}</span>
            <br />
            <span className="accent">{profile.heroTitle[1]}</span>
            <br />
            <span className="dim">{profile.heroTitle[2]}</span>
          </h1>

          <p className="hero-bio hero-fade hero-fade-3">{profile.heroBio}</p>

          <div className="hero-pills hero-fade hero-fade-4">
            {heroPills.map((pill) => (
              <span key={pill} className="pill">
                {pill}
              </span>
            ))}
          </div>

          <div className="hero-ctas hero-fade hero-fade-5">
            <a href="#projects" className="btn-primary">
              View Projects →
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              GitHub Profile ↗
            </a>

            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              View CV ↗
            </a>

            <a href={profile.resume} download className="btn-ghost">
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-right hero-fade hero-fade-6">
          <div className="stat-stack">
            {heroStats.map((item) => (
              <div className="stat-card" key={item.label}>
                <div className="sc-accent">{item.icon}</div>
                <div>
                  <div className="sc-val">{item.value}</div>
                  <div className="sc-lbl">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-cue">
        <div className="sct aroll-line"></div>
        Scroll
      </div>
    </section>
  );
}
