export default function Stats() {
    const focusAreas = [
        {
            title: "Systems Thinking",
            points: [
                "Process management and Unix-like execution flow",
                "Concurrency patterns with goroutines and multithreading",
                "Low-latency backend design"
            ]
        },
        {
            title: "Distributed Engineering",
            points: [
                "Concurrent crawling and network-bound systems",
                "Scalability, rate limiting, and fault-aware design",
                "Production-oriented backend architecture"
            ]
        },
        {
            title: "Research Depth",
            points: [
                "Federated learning systems",
                "GAN-CNN-LSTM modeling",
                "Time-series forecasting and robust evaluation"
            ]
        },
        {
            title: "Problem Solving",
            points: [
                "DSA practice at scale",
                "Strong CS fundamentals",
                "System design learning with backend-first focus"
            ]
        }
    ];

    return (
        <section id="stats">
            <div className="s-tag reveal">Engineering Depth</div>
            <h2 className="s-h2 reveal">
                Built on <em>strong fundamentals.</em>
            </h2>
            <p className="s-desc reveal">
                My work sits at the intersection of backend engineering, systems thinking, distributed architecture,
                and research-driven problem solving.
            </p>

            <div className="depth-grid">
                {focusAreas.map((area) => (
                    <div className="depth-card reveal" key={area.title}>
                        <h3>{area.title}</h3>
                        <ul>
                            {area.points.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
