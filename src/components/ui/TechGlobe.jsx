import { useRef, useEffect } from "react";

const SKILLS = [
  { name: "React.js",   cat: 0 }, { name: "Node.js",    cat: 1 },
  { name: "MongoDB",    cat: 2 }, { name: "Express",     cat: 1 },
  { name: "JavaScript", cat: 0 }, { name: "TypeScript",  cat: 0 },
  { name: "HTML5",      cat: 0 }, { name: "CSS3",        cat: 0 },
  { name: "Tailwind",   cat: 0 }, { name: "Redux",       cat: 0 },
  { name: "REST APIs",  cat: 1 }, { name: "JWT Auth",    cat: 1 },
  { name: "Mongoose",   cat: 2 }, { name: "MySQL",       cat: 2 },
  { name: "Firebase",   cat: 2 }, { name: "Git",         cat: 3 },
  { name: "Postman",    cat: 3 }, { name: "Vercel",      cat: 3 },
  { name: "Docker",     cat: 3 }, { name: "Next.js",     cat: 0 },
  { name: "GraphQL",    cat: 1 }, { name: "Socket.io",   cat: 1 },
];

const COLORS   = ["#c8f135", "#38d9f5", "#ff7c9e", "#9b8fff"];
const CAT_NAMES = ["Frontend", "Backend", "Database", "DevOps"];
const K_NEAREST = 6; // edges per node — raise to 5 or 6 for denser mesh

export default function TechGlobe() {
  const canvasRef  = useRef(null);
  const tooltipRef = useRef(null);
  const stateRef   = useRef({
    rotX: 0.35, rotY: 0, velX: 0, velY: 0,
    dragging: false, lastMX: 0, lastMY: 0,
    hovered: -1, mouseX: -9999, mouseY: -9999, raf: null,
  });

  useEffect(() => {
    const canvas  = canvasRef.current;
    const tooltip = tooltipRef.current;
    const ctx     = canvas.getContext("2d");
    const s       = stateRef.current;
    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    canvas.width  = W;
    canvas.height = H;

    // — Fibonacci lattice sphere points —
    const N      = SKILLS.length;
    const golden = Math.PI * (3 - Math.sqrt(5));
    const pts    = SKILLS.map((sk, i) => {
      const y  = 1 - (i / (N - 1)) * 2;
      const rr = Math.sqrt(Math.max(0, 1 - y * y));
      const th = golden * i;
      return { ox: Math.cos(th) * rr, oy: y, oz: Math.sin(th) * rr, ...sk };
    });

    // — K-nearest neighbour edges —
    const edges  = [];
    const edgeSet = {};
    for (let i = 0; i < N; i++) {
      const dists = pts
        .map((p, j) => {
          if (i === j) return null;
          const dx = pts[i].ox - p.ox, dy = pts[i].oy - p.oy, dz = pts[i].oz - p.oz;
          return { j, d: dx * dx + dy * dy + dz * dz };
        })
        .filter(Boolean)
        .sort((a, b) => a.d - b.d);

      for (let k = 0; k < K_NEAREST; k++) {
        const a = Math.min(i, dists[k].j);
        const b = Math.max(i, dists[k].j);
        const key = `${a}-${b}`;
        if (!edgeSet[key]) { edgeSet[key] = 1; edges.push([a, b]); }
      }
    }

    const SPHERE_R = Math.min(W, H) * 0.36;
    const cx = W / 2, cy = H / 2;

    function project(p) {
      const cosY = Math.cos(s.rotY), sinY = Math.sin(s.rotY);
      const x1 = p.ox * cosY - p.oz * sinY;
      const z1 = p.ox * sinY + p.oz * cosY;
      const cosX = Math.cos(s.rotX), sinX = Math.sin(s.rotX);
      const y2 = p.oy * cosX - z1 * sinX;
      const z2 = p.oy * sinX + z1 * cosX;
      const fov = 2.4, sc = fov / (fov + z2);
      return { sx: cx + x1 * SPHERE_R * sc, sy: cy + y2 * SPHERE_R * sc, z2, sc };
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      const projs = pts.map((p) => project(p));

      // Draw edges
      for (const [ia, ib] of edges) {
        const a = projs[ia], b = projs[ib];
        const midZ = (a.z2 + b.z2) * 0.5;
        const depthAlpha = Math.max(0.04, 0.55 - midZ * 0.55);
        const same = pts[ia].cat === pts[ib].cat;

        ctx.beginPath();
        ctx.moveTo(a.sx, a.sy);
        ctx.lineTo(b.sx, b.sy);
        ctx.strokeStyle = same ? COLORS[pts[ia].cat] : "#ffffff";
        ctx.globalAlpha = same ? depthAlpha * 0.65 : depthAlpha * 0.18;
        ctx.lineWidth   = same ? 0.9 : 0.5;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      // Draw dots — back to front
      const order = pts.map((_, i) => i).sort((a, b) => projs[a].z2 - projs[b].z2);

      for (const i of order) {
        const p   = projs[i];
        const col = COLORS[pts[i].cat];
        const isHov = i === s.hovered;
        const dotR  = p.sc * (isHov ? 9 : 5.5);
        const da    = Math.max(0.2, 0.7 - p.z2 * 0.6);

        if (isHov) {
          ctx.globalAlpha = da * 0.22;
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, dotR + 8, 0, Math.PI * 2);
          ctx.fillStyle = col;
          ctx.fill();
        }

        ctx.globalAlpha = da;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, dotR, 0, Math.PI * 2);
        ctx.fillStyle = col;
        ctx.fill();

        if (p.z2 < 0.15 || isHov) {
          const la = isHov ? 1 : Math.max(0.3, (0.15 - p.z2) * 5);
          ctx.globalAlpha = la;
          const fs = Math.max(10, Math.round(p.sc * 7) + 9);
          ctx.font      = (isHov ? "bold " : "") + fs + "px 'DM Mono', monospace";
          ctx.fillStyle = isHov ? col : "#b4b4c8";
          ctx.textAlign = "center";
          ctx.fillText(pts[i].name, p.sx, p.sy - dotR - 5);
        }
        ctx.globalAlpha = 1;
      }

      // Hover detection
      s.hovered = -1;
      let minD = 24;
      for (let i = 0; i < N; i++) {
        const p = projs[i];
        const d = Math.hypot(s.mouseX - p.sx, s.mouseY - p.sy);
        if (d < p.sc * 14 + 4 && d < minD) { minD = d; s.hovered = i; }
      }

      // Tooltip
      if (s.hovered > -1) {
        const p   = projs[s.hovered];
        const col = COLORS[pts[s.hovered].cat];
        tooltip.style.opacity     = "1";
        tooltip.style.left        = `${p.sx + 16}px`;
        tooltip.style.top         = `${p.sy - 20}px`;
        tooltip.style.color       = col;
        tooltip.style.borderColor = col + "88";
        tooltip.style.background  = "rgba(5,5,8,0.92)";
        tooltip.textContent = `${pts[s.hovered].name} · ${CAT_NAMES[pts[s.hovered].cat]}`;
      } else {
        tooltip.style.opacity = "0";
      }
    }

    function tick() {
      if (!s.dragging) {
        s.rotY += 0.005 + s.velX * 0.02;
        s.rotX += s.velY * 0.02;
        s.velX *= 0.93; s.velY *= 0.93;
        s.rotX = Math.max(-1.1, Math.min(1.1, s.rotX));
      }
      draw();
      s.raf = requestAnimationFrame(tick);
    }

    const onDown  = (e) => { s.dragging = true; s.lastMX = e.clientX; s.lastMY = e.clientY; };
    const onUp    = ()  => { s.dragging = false; };
    const onMove  = (e) => {
      const rect = canvas.getBoundingClientRect();
      s.mouseX = e.clientX - rect.left;
      s.mouseY = e.clientY - rect.top;
      if (s.dragging) {
        const dx = e.clientX - s.lastMX, dy = e.clientY - s.lastMY;
        s.velX = dx * 0.013; s.velY = dy * 0.013;
        s.rotY += dx * 0.008; s.rotX += dy * 0.008;
        s.rotX = Math.max(-1.1, Math.min(1.1, s.rotX));
        s.lastMX = e.clientX; s.lastMY = e.clientY;
      }
    };
    const onLeave = () => { s.mouseX = -9999; s.mouseY = -9999; };

    canvas.addEventListener("mousedown",  onDown);
    window.addEventListener("mouseup",    onUp);
    window.addEventListener("mousemove",  onMove);
    canvas.addEventListener("mouseleave", onLeave);
    tick();

    return () => {
      cancelAnimationFrame(s.raf);
      canvas.removeEventListener("mousedown",  onDown);
      window.removeEventListener("mouseup",    onUp);
      window.removeEventListener("mousemove",  onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "420px", background: "#050508", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.06)", overflow: "hidden", position: "relative", cursor: "grab" }}>
      <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />
      <div ref={tooltipRef} style={{ position: "absolute", top: 0, left: 0, padding: "5px 12px", borderRadius: "8px", fontSize: "12px", fontFamily: "'DM Mono', monospace", pointerEvents: "none", opacity: 0, transition: "opacity .12s", whiteSpace: "nowrap", border: "1px solid" }} />
      <div style={{ position: "absolute", bottom: "14px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "18px" }}>
        {CAT_NAMES.map((name, i) => (
          <div key={name} style={{ display: "flex", alignItems: "center", gap: "5px", fontFamily: "'DM Mono', monospace", fontSize: "11px", color: COLORS[i], opacity: 0.8 }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: COLORS[i] }} />
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}