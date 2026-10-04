"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { BY_ID, CORP_HEX_3D, CORP_ORDER, SHAPES, SELECT_EVENT, corpKey, parseRings, type CorpKey } from "@/lib/wards";

type Props = { lang: "en" | "kn"; hint: string; replayLabel: string };

const SLAB = new THREE.Color("#8b8a99");
const FLAT = 1.2;
const TALL = 16;
const SPREAD = 26;

const ease = (t: number) => 1 - Math.pow(1 - Math.min(Math.max(t, 0), 1), 3);

export default function CityScape({ lang, hint, replayLabel }: Props) {
  const mount = useRef<HTMLDivElement>(null);
  const replayRef = useRef<() => void>(() => {});
  const [label, setLabel] = useState<{ text: string; x: number; y: number } | null>(null);

  useEffect(() => {
    const el = mount.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    el.appendChild(renderer.domElement);
    renderer.domElement.style.display = "block";
    renderer.domElement.setAttribute("aria-hidden", "true");

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 10, 5000);
    camera.position.set(-120, 900, 1050);

    scene.add(new THREE.HemisphereLight(0xffffff, 0xb9bab3, 1.6));
    const sun = new THREE.DirectionalLight(0xffffff, 1.6);
    sun.position.set(-400, 900, 500);
    scene.add(sun);

    // Map plane: shape coords centred, y flipped so north is away from camera.
    const cx = SHAPES.width / 2;
    const cy = SHAPES.height / 2;
    const city = new THREE.Group();
    city.rotation.x = -Math.PI / 2;
    scene.add(city);

    // Corporation centroids, for the "split apart" offset.
    const sums: Record<string, { x: number; y: number; n: number }> = {};
    const items: {
      id: string;
      corp: CorpKey;
      mesh: THREE.Mesh<THREE.ExtrudeGeometry, THREE.MeshStandardMaterial>;
      target: THREE.Color;
    }[] = [];

    for (const s of SHAPES.shapes) {
      const w = BY_ID.get(s.ward_id);
      if (!w) continue;
      const corp = corpKey(w.corporation);
      const rings = parseRings(s.d);
      const shapes = rings.map((ring) => {
        const shp = new THREE.Shape();
        ring.forEach(([x, y], i) => {
          const px = x - cx;
          const py = -(y - cy);
          if (i === 0) shp.moveTo(px, py);
          else shp.lineTo(px, py);
          const acc = (sums[corp] ??= { x: 0, y: 0, n: 0 });
          acc.x += px;
          acc.y += py;
          acc.n += 1;
        });
        return shp;
      });
      const geo = new THREE.ExtrudeGeometry(shapes, { depth: 1, bevelEnabled: false });
      const mat = new THREE.MeshStandardMaterial({ color: SLAB.clone(), roughness: 0.85, metalness: 0 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.scale.z = FLAT;
      mesh.userData.id = s.ward_id;
      const edges = new THREE.LineSegments(
        new THREE.EdgesGeometry(geo, 30),
        new THREE.LineBasicMaterial({ color: 0xf2f2ee, transparent: true, opacity: 0.55 }),
      );
      mesh.add(edges);
      city.add(mesh);
      items.push({ id: s.ward_id, corp, mesh, target: new THREE.Color(CORP_HEX_3D[corp]) });
    }

    const offsets: Record<string, THREE.Vector2> = {};
    for (const k of Object.keys(sums)) {
      const v = new THREE.Vector2(sums[k].x / sums[k].n, sums[k].y / sums[k].n);
      offsets[k] = v.lengthSq() > 1 ? v.normalize().multiplyScalar(SPREAD) : new THREE.Vector2();
    }
    offsets.Central = new THREE.Vector2(0, 0);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.rotateSpeed = 0.5;
    controls.minPolarAngle = 0.35;
    controls.maxPolarAngle = 1.15;
    controls.enabled = finePointer;
    controls.target.set(0, 0, 20);

    // Animation clock: wards rise and separate, one corporation after another.
    let start = performance.now();
    const STAGGER = 380;
    const DUR = 1100;
    const HOLD = 700;
    const totalMs = HOLD + STAGGER * (CORP_ORDER.length - 1) + DUR;
    replayRef.current = () => {
      start = performance.now();
    };

    const apply = (now: number) => {
      const elapsed = reduced ? totalMs : now - start;
      for (const it of items) {
        const i = CORP_ORDER.indexOf(it.corp);
        const t = ease((elapsed - HOLD - i * STAGGER) / DUR);
        it.mesh.scale.z = FLAT + (TALL - FLAT) * t;
        it.mesh.material.color.copy(SLAB).lerp(it.target, t);
        const o = offsets[it.corp];
        it.mesh.position.set(o.x * t, o.y * t, 0);
      }
    };

    // Hover and tap.
    const ray = new THREE.Raycaster();
    const ptr = new THREE.Vector2();
    let hovered: (typeof items)[number] | null = null;
    const meshes = items.map((i) => i.mesh);
    const pick = (ev: PointerEvent) => {
      const r = renderer.domElement.getBoundingClientRect();
      ptr.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
      ray.setFromCamera(ptr, camera);
      const hit = ray.intersectObjects(meshes, false)[0];
      return { hit: hit ? items.find((i) => i.mesh === hit.object) ?? null : null, x: ev.clientX - r.left, y: ev.clientY - r.top };
    };
    const setHover = (it: (typeof items)[number] | null) => {
      if (hovered === it) return;
      if (hovered) hovered.mesh.material.emissive.setHex(0x000000);
      hovered = it;
      if (it) it.mesh.material.emissive.setHex(0x2a2a2a);
      renderer.domElement.style.cursor = it ? "pointer" : "grab";
    };
    const onMove = (ev: PointerEvent) => {
      if (ev.pointerType !== "mouse") return;
      const { hit, x, y } = pick(ev);
      setHover(hit);
      if (hit) {
        const w = BY_ID.get(hit.id)!;
        setLabel({ text: lang === "kn" ? w.ward_name_kn : w.ward_name, x, y });
      } else setLabel(null);
    };
    let downAt = { x: 0, y: 0 };
    const onDown = (ev: PointerEvent) => (downAt = { x: ev.clientX, y: ev.clientY });
    const onUp = (ev: PointerEvent) => {
      if (Math.hypot(ev.clientX - downAt.x, ev.clientY - downAt.y) > 6) return;
      const { hit } = pick(ev);
      if (!hit) return;
      window.dispatchEvent(new CustomEvent(SELECT_EVENT, { detail: hit.id }));
      document.getElementById("ward")?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
    };
    const onLeave = () => {
      setHover(null);
      setLabel(null);
    };
    renderer.domElement.addEventListener("pointermove", onMove);
    renderer.domElement.addEventListener("pointerdown", onDown);
    renderer.domElement.addEventListener("pointerup", onUp);
    renderer.domElement.addEventListener("pointerleave", onLeave);

    const resize = () => {
      const { width, height } = el.getBoundingClientRect();
      renderer.setSize(width, height, false);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      camera.aspect = width / Math.max(height, 1);
      // Pull the camera back on narrow screens so the whole city fits.
      const dist = width < 640 ? 1.2 : 1.32;
      camera.position.set(-120 * dist, 900 * dist, 1050 * dist);
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    resize();

    let visible = true;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(el);

    let raf = 0;
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (!visible) return;
      apply(now);
      controls.update();
      renderer.render(scene, camera);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      controls.dispose();
      items.forEach((i) => {
        i.mesh.geometry.dispose();
        i.mesh.material.dispose();
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [lang]);

  return (
    <div className="cityscape">
      <div ref={mount} className="cityscape-canvas" />
      {label && (
        <div className="cityscape-label" style={{ left: label.x, top: label.y }}>
          {label.text}
        </div>
      )}
      <div className="cityscape-foot">
        <p>{hint}</p>
        <button type="button" onClick={() => replayRef.current()}>
          {replayLabel}
        </button>
      </div>
    </div>
  );
}
