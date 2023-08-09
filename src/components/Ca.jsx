/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ca.glb -T -S
Author: MaRaT (https://sketchfab.com/marat)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/borbemporium-cat-763d172d8ee24352a9049acf38a589e1
Title: Borbemporium Cat
*/

import {
  MeshTransmissionMaterial,
  useGLTF,
  useScroll,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Model(props) {
  const { nodes } = useGLTF("/ca-transformed.glb");
  const group = useRef();
  const scroll = useScroll();

  useFrame((_, delta) => {
    group.current.rotation.x = scroll.offset;
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[-0.3, 0, 1.7]}
      rotation={[0.4, 0.7, 0.4]}
      scale={0.1}
    >
      <group
        position={[0.02, 0, -5.03]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.66, 0.66, 1]}
      >
        <mesh
          geometry={nodes.Freehand001_Blaaaaaaaaack_0.geometry}
          position={[-32.42, 60.03, 0]}
        >
          <MeshTransmissionMaterial
            backside
            samples={10}
            transmission={1}
            roughness={0.5}
            clearcoat={1}
            clearcoatRoughness={0.1}
            thickness={1}
            ior={1}
            chromaticAberration={0.5}
            anisotropy={0.1}
            color="#c9ffa1"
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/ca-transformed.glb");
