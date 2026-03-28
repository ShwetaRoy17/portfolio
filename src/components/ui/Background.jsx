import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function BackgroundFX() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 35;

        const geometry = new THREE.BufferGeometry();
        const count = 1500;
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
            const radius = 20 + Math.random() * 65;

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
            size: 0.18,
            vertexColors: true,
            transparent: true,
            opacity: 0.25
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        const torusGeo = new THREE.TorusGeometry(14, 1, 10, 90);
        const torusMat = new THREE.MeshBasicMaterial({
            color: 0xc8f135,
            wireframe: true,
            transparent: true,
            opacity: 0.03
        });
        const torus = new THREE.Mesh(torusGeo, torusMat);
        torus.rotation.x = Math.PI / 3;
        scene.add(torus);

        const icoGeo = new THREE.IcosahedronGeometry(10, 1);
        const icoMat = new THREE.MeshBasicMaterial({
            color: 0x38d9f5,
            wireframe: true,
            transparent: true,
            opacity: 0.025
        });
        const ico = new THREE.Mesh(icoGeo, icoMat);
        ico.position.set(16, -6, -10);
        scene.add(ico);

        let mouseX = 0;
        let mouseY = 0;
        let frameId;

        const onMove = (event) => {
            mouseX = (event.clientX / window.innerWidth - 0.5) * 2.2;
            mouseY = -(event.clientY / window.innerHeight - 0.5) * 1.4;
        };

        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        const animate = () => {
            frameId = requestAnimationFrame(animate);
            points.rotation.y += 0.0005;
            points.rotation.x += 0.00015;
            torus.rotation.z += 0.0015;
            torus.rotation.y += 0.0008;
            ico.rotation.y += 0.001;
            camera.position.x += (mouseX - camera.position.x) * 0.03;
            camera.position.y += (mouseY - camera.position.y) * 0.03;
            camera.lookAt(scene.position);
            renderer.render(scene, camera);
        };

        window.addEventListener("mousemove", onMove);
        window.addEventListener("resize", onResize);
        animate();

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("resize", onResize);
            geometry.dispose();
            material.dispose();
            torusGeo.dispose();
            torusMat.dispose();
            icoGeo.dispose();
            icoMat.dispose();
            renderer.dispose();
        };
    }, []);

    return <canvas ref={canvasRef} className="site-bg-canvas" aria-hidden="true" />;
}
