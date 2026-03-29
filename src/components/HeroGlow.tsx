import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

type ParticlesProps = {
  count?: number;
};

function Ring(): JSX.Element {
  const ref =
    useRef<THREE.Mesh<THREE.TorusGeometry, THREE.MeshStandardMaterial> | null>(
      null,
    );
  const geometry = useMemo(
    () => new THREE.TorusGeometry(2.4, 0.35, 64, 256),
    [],
  );
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#a855f7",
        emissive: "#7c3aed",
        emissiveIntensity: 3,
        metalness: 0.2,
        roughness: 0.15,
      }),
    [],
  );

  useFrame((_, delta) => {
    if (!ref.current) {
      return;
    }

    ref.current.rotation.y += delta * 0.25;
    ref.current.rotation.x += delta * 0.1;
  });

  return <mesh ref={ref} geometry={geometry} material={material} />;
}

function Particles({ count = 60 }: ParticlesProps): JSX.Element {
  const positions = useMemo(() => {
    const array = new Float32Array(count * 3);

    for (let index = 0; index < count; index += 1) {
      const radius = 2.6 + Math.random() * 0.8;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 0.8;

      array[index * 3] = Math.cos(angle) * radius;
      array[index * 3 + 1] = y;
      array[index * 3 + 2] = Math.sin(angle) * radius;
    }

    return array;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.08} color="#c084fc" />
    </points>
  );
}

function HeroGlow(): JSX.Element {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
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
          <Bloom
            intensity={2.2}
            luminanceThreshold={0.05}
            luminanceSmoothing={0.9}
            height={960}
          />
        </EffectComposer>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.75}
        />
      </Canvas>
    </div>
  );
}

export default HeroGlow;
