import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import "./App.css";

function Box() {
  const boxRef = useRef<Mesh>(new Mesh());

  useFrame(() => {
    boxRef.current.rotation.x += 0.005;
    boxRef.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#0x44a88" />
    </mesh>
  );
}

function ThreeScene() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault fov={75} position={[0, 0, 10]} />
      <ambientLight />
      <pointLight position={[5, 5, 5]} />
      <Box />

      <OrbitControls target={[0, -1, 0]} enableDamping={true} />
    </Canvas>
  );
}

function App() {
  return (
    <div className="App h-screen">
      <ThreeScene />
    </div>
  );
}

export default App;
