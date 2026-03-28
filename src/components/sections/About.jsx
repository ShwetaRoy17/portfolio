import { about, profile } from "../../data/data";

export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-text reveal">
          <div className="s-tag">About Me</div>
          <h2 className="s-h2">
            Engineer.
            <br />
            <em>Systems thinker.</em>
          </h2>

          <p className="lede"><strong><em>{about.lede}</em></strong></p>

          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}


          <div className="trait-grid">
            {about.traits.map((trait) => (
              <div className="trait" key={trait.title}>
                <div className="trait-icon">{trait.icon}</div>
                <div className="trait-t">{trait.title}</div>
                <div className="trait-d">{trait.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-visual reveal">
          <div className="term">
            <div className="term-bar">
              <div className="tb" style={{ background: "#ff5f57" }}></div>
              <div className="tb" style={{ background: "#febc2e" }}></div>
              <div className="tb" style={{ background: "#28c840" }}></div>
              <div className="term-title">shweta@portfolio — zsh</div>
            </div>

            <div className="term-body">
              <div>
                <span className="tp">shweta</span>
                <span className="tm"> ~/systems</span>{" "}
                <span style={{ color: "#fff" }}>$ cat engineer.json</span>
              </div>

              <div style={{ margin: "10px 0 16px 0" }}>
                <div>{`{`}</div>
                <div>&nbsp;&nbsp;<span className="tk">name</span>: <span className="tv">'Shweta Roy'</span>,</div>
                <div>&nbsp;&nbsp;<span className="tk">role</span>: <span className="tv">'Backend-Focused Software Engineer'</span>,</div>
                <div>&nbsp;&nbsp;<span className="tk">focus</span>: [<span className="tv">'Backend'</span>, <span className="tv">'Concurrency'</span>, <span className="tv">'Distributed Systems'</span>],</div>
                <div>&nbsp;&nbsp;<span className="tk">github</span>: <span className="tv">'ShwetaRoy17'</span>,</div>
                <div>&nbsp;&nbsp;<span className="tk">leetcode</span>: <span className="tv">'1000+ problems'</span>,</div>
                <div>&nbsp;&nbsp;<span className="tk">available</span>: <span style={{ color: "var(--lime)" }}>true</span></div>
                <div>{`}`}</div>
              </div>

              <div>
                <span className="tp">shweta</span>
                <span className="tm"> ~/systems</span>{" "}
                <span style={{ color: "#fff" }}>$ _<span className="tcursor"></span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
