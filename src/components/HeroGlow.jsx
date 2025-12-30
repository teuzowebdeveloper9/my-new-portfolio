import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function Ring() {
  const ref = useRef(null);
  const geom = useMemo(() => new THREE.TorusGeometry(2.4, 0.35, 64, 256), []);
  const mat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#a855f7",
        emissive: "#7c3aed",
        emissiveIntensity: 3,
        metalness: 0.2,
        roughness: 0.15,
      }),
    []
  );

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.25;
      ref.current.rotation.x += delta * 0.1;
    }
  });

  return <mesh ref={ref} geometry={geom} material={mat} />;
}

function Particles({ count = 60 }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.6 + Math.random() * 0.8;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 0.8;
      arr[i * 3] = Math.cos(angle) * r;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = Math.sin(angle) * r;
    }
    return arr;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.08} color="#c084fc" emissive="#6B21A8" emissiveIntensity={1.2} />
    </points>
  );
}

export default function HeroGlow() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Fallback estático caso WebGL não carregue */}
      <div className="absolute inset-0 bg-[radial-gradient(700px_at_70%_45%,rgba(124,58,237,0.35),rgba(13,13,13,0))] opacity-100 blur-2xl" />
      <div className="absolute inset-0 bg-[radial-gradient(450px_at_25%_35%,rgba(34,211,238,0.18),rgba(13,13,13,0))] opacity-90 blur-3xl" />
      <Canvas
        camera={{ position: [0, 0, 5.6], fov: 38 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        style={{ position: "absolute", inset: 0 }}
      >
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={0.65} />
        <pointLight position={[3, 3, 3]} intensity={2} color="#a855f7" />
        <pointLight position={[-3, -2, -3]} intensity={1.6} color="#22d3ee" />
        <Suspense fallback={null}>
          <group rotation={[0.35, 0.15, 0]}>
            <Ring />
            <Particles />
          </group>
        </Suspense>
        <EffectComposer>
          <Bloom intensity={2.2} luminanceThreshold={0.05} luminanceSmoothing={0.9} height={960} />
        </EffectComposer>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.75} />
      </Canvas>
    </div>
  );
}

