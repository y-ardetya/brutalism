import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ScrollControls } from "@react-three/drei";
import Experience from "./components/Experience";
import * as THREE from "three";

const App = () => {
  return (
    <>
      <Canvas gl={{ antialias: false }} dpr={1}>
        <directionalLight position={[0, 0, 5]} intensity={1} />
        <Environment preset="sunset" />
        <Rig />
        <ScrollControls pages={3}>
          <Experience />
        </ScrollControls>
      </Canvas>
    </>
  );
};

const Rig = ({ v = new THREE.Vector3() }) => {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(state.mouse.x / 2, state.mouse.y / 2, 5),
      0.05
    );
  });
};

export default App;
