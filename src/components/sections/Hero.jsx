import { heroPills, heroStats, profile } from "../../data/data";

export default function Hero() {
  return (
    <section id="hero">
      <canvas id="three-canvas"></canvas>

      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="blink-dot"></span>
            Full Stack Developer · {profile.location}
          </div>

          <h1 className="hero-h1">
            <span className="dim">{profile.heroTitle[0]}</span>
            <br />
            <span className="accent">{profile.heroTitle[1]}</span>
            <br />
            <span className="dim">{profile.heroTitle[2]}</span>
          </h1>

          <p className="hero-bio">{profile.heroBio}</p>

          <div className="hero-pills">
            {heroPills.map((pill) => (
              <span key={pill} className="pill">
                {pill}
              </span>
            ))}
          </div>

          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">View Projects →</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ghost">
              GitHub Profile ↗
            </a>
          </div>
        </div>

        <div className="hero-right">
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
        <div className="scroll-line"></div>
        Scroll
      </div>
    </section>
  );
}
