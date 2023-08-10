import { useTexture } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";

const CarouselData = ({ position, rotation, reverse }) => {
  const textures = useTexture([
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
  ]);
  const [scrollTarget, setScrollTarget] = useState(0);
  const margin = 7.3;
  const width = textures.length * margin;
  const mesh = useRef();
  const group = useRef();

  useEffect(() => {
    const handleScroll = (e) => {
      setScrollTarget((prev) =>
        reverse ? prev + e.wheelDeltaY * 0.003 : prev - e.wheelDeltaY * 0.003
      );
    };
    document.addEventListener("wheel", handleScroll);

    return () => {
      document.removeEventListener("wheel", handleScroll);
    };
  }, [reverse]);

  return (
    <>
      {textures.map((texture, index) => {
        return (
          <group
            ref={group}
            key={index}
            position={position}
            rotation={rotation}
          >
            <mesh
              scale={1.8}
              ref={mesh}
              position={[
                ((index * margin + scrollTarget + 42069 * width) % width) -
                  2 * margin,
                0,
                0,
              ]}
            >
              <planeGeometry args={[4, 2]} />
              <meshBasicMaterial map={texture} />
            </mesh>
          </group>
        );
      })}
    </>
  );
};

const Carousel = () => {
  const [reverse, _] = useState(true);

  return (
    <>
      <CarouselData rotation={[0, 0, 0.1]} position={[-4, -21, -5]} />
      <CarouselData
        rotation={[0, 0, 0.1]}
        position={[-8, -10.5, -5]}
        reverse={reverse}
      />
    </>
  );
};

export default Carousel;
