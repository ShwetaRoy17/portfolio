import { useEffect, useRef } from "react";
import * as THREE from "three";
import { heroPills, heroStats, profile } from "../../data/data";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 35;

    const geometry = new THREE.BufferGeometry();
    const count = 1200;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const palette = [
      [0.78, 0.95, 0.21],
      [0.22, 0.85, 0.96],
      [1, 0.49, 0.62],
      [0.61, 0.56, 1]
    ];

    for (let i = 0; i < count; i += 1) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 20 + Math.random() * 60;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = color[0];
      colors[i * 3 + 1] = color[1];
      colors[i * 3 + 2] = color[2];
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.5
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const torusGeometry = new THREE.TorusGeometry(14, 1, 8, 60);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0xc8f135,
      wireframe: true,
      transparent: true,
      opacity: 0.04
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.rotation.x = Math.PI / 3;
    scene.add(torus);

    let mouseX = 0;
    let mouseY = 0;
    let frameId;

    const onMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 3;
      mouseY = -(event.clientY / window.innerHeight - 0.5) * 2;
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      frameId = window.requestAnimationFrame(animate);
      points.rotation.y += 0.0008;
      torus.rotation.z += 0.002;
      torus.rotation.y += 0.001;
      camera.position.x += (mouseX - camera.position.x) * 0.04;
      camera.position.y += (mouseY - camera.position.y) * 0.04;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);
    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section id="hero">
      <canvas ref={canvasRef} id="three-canvas"></canvas>

      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="blink-dot"></span>
            {profile.role} · {profile.location}
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
              <span key={pill} className="pill">{pill}</span>
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
