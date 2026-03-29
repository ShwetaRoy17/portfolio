import { heroPills, profile } from "../../data/data";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-content hero-content-single">
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
              GitHub ↗
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              Linkedin
            </a>

            <a href={profile.resume} download className="btn-ghost">
              View CV
            </a>
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
