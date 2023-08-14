import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { ImageMaterial } from "./imageMaterial";

import * as THREE from "three";

const Gallery = ({ texture, index }) => {
  const group = useRef();
  const minusGroup = useRef();
  const plusGroup = useRef();
  const line1 = useRef();
  const line4 = useRef();

  const scroll = useScroll();
  const column = index;
  const xPos = column * 8 - 6;
  const geometry = new THREE.PlaneGeometry(1, 1, 8, 8);

  useFrame(() => {
    minusGroup.current.position.x -= scroll.delta * 10;
    plusGroup.current.position.x += scroll.delta * 10;
    group.current.children.forEach((child) => {
      child.material.uniforms.uScale.value = scroll.offset * 1.3;
    });
  });

  return (
    <>
      <group ref={group} position={[0, 0, 0]} rotation-z={0.1} dispose={null}>
        <mesh
          ref={minusGroup}
          scale={[8, 5, 1]}
          position={[xPos + 3, -10.5, -5]}
          geometry={geometry}
        >
          <imageMaterial
            key={ImageMaterial.key}
            ref={line1}
            uTexture={texture}
          />
        </mesh>

        <mesh
          ref={plusGroup}
          scale={[8, 5, 1]}
          position={[xPos - 35, -23, -5]}
          geometry={geometry}
        >
          <imageMaterial
            key={ImageMaterial.key}
            ref={line4}
            uTexture={texture}
          />
        </mesh>
      </group>
    </>
  );
};

export default Gallery;
