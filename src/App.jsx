import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Grid, ScrollControls } from "@react-three/drei";
import Experience from "./components/Experience";
import * as THREE from "three";

const App = () => {
  return (
    <>
      <Canvas gl={{ antialias: false }} dpr={1}>
        {/* <Perf /> */}
        <color attach="background" args={["#000"]} />
        <directionalLight position={[0, 0, 5]} intensity={1} />
        <Environment preset="sunset" />
        <Rig />
        <Grid
          cellColor="white"
          infiniteGrid
          cellThickness={0.5}
          cellSize={2}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1}
          fadeDistance={5}
        />
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
      v.set(state.mouse.x / 4, state.mouse.y / 4, 5),
      0.05
    );
  });
};

export default App;
