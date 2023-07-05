import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import { TextureLoader } from "three";
import { useThree } from "@react-three/fiber";

import earth from "../../assets/world-map2.png"

function Scene() {
  const texture = earth;
  const colorMap = useLoader(TextureLoader, texture);
  const { viewport } = useThree()
  return (
    <>
      <ambientLight intensity={1.4} />
      <directionalLight />
      <mesh scale={(viewport.width / 17)}>
        <sphereBufferGeometry args={[3.0, 30, 30]} />
        <meshStandardMaterial
          map={colorMap}
        />
      </mesh>
    </>
  );
}


export default function Globe() {
  return (
    <div className="w-1/2 h-full absolute left-0">
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls autoRotate />
        </Suspense>
      </Canvas>
    </div>
  );
}
