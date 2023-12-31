import { Float, Grid, Scroll, Text, Trail } from "@react-three/drei";
import Model from "./Ca";
import Overlay from "./Overlay";
import font1 from "/Bangers-Regular.ttf";
import font2 from "/Aden.ttf";
import font3 from "/ZenAntique-Regular.ttf";
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import Carousel from "./Carousel";

const Experience = () => {
  const ref = useRef();
  const { viewport } = useThree();
  useFrame((state, delta) => {
    ref.current.position.x = (state.mouse.x * viewport.width) / 2;
    ref.current.position.y = (state.mouse.y * viewport.height) / 2;
  });
  return (
    <>
      <Trail
        width={1}
        color={"#c9ffa1"}
        length={3}
        decay={1.5}
        local={false}
        interval={1}
        attenuation={(width) => width}
      >
        <mesh scale={0.001} ref={ref}>
          <sphereGeometry />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>
      </Trail>
      <Float>
        <Model />
      </Float>
      <Scroll>
        <Grid
          cellColor="white"
          infiniteGrid
          cellThickness={0.1}
          cellSize={1}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, 0, -6]}
          scale={2}
          fadeDistance={15}
        />
        <TextContent
          font={font1}
          sentence={"brutalism"}
          position={[0, -1, -5]}
          rotation={[0, 0, 0.1]}
          scale={viewport.width / 2}
        />
        <TextContent
          font={font1}
          sentence={"overwrite"}
          position={[0, -17, -5]}
          rotation={[0, 0, 0.1]}
          scale={viewport.width / 2}
        />
        <TextContent
          font={font2}
          sentence={"Seduce"}
          position={[-9.5, 3, -5]}
          rotation={[0, 0, 0.1]}
          scale={3}
        />
        <TextContent
          font={font3}
          sentence={"過半数を置き換える"}
          position={[8, 4, -5]}
          rotation={[0, 0, 0.1]}
          scale={1}
        />
        <TextContent
          font={font1}
          sentence={"Overwhelm the World"}
          position={[0, -6, -5]}
          rotation={[0, 0, 0.1]}
          scale={viewport.width / 4}
          strokeColor={"#f5f5f5"}
          fillOpacity={0.1}
          strokeWidth={0.01}
        />

        <TextContent
          font={font1}
          sentence={"Captivate"}
          position={[-6, 4, -5]}
          rotation={[0, 0, 0.1]}
          scale={viewport.width / 3}
          strokeColor={"#f5f5f5"}
          fillOpacity={0.1}
          strokeWidth={0.01}
          strokeOpacity={0.3}
        />

        <Carousel />
      </Scroll>
      <Scroll html>
        <Overlay />
      </Scroll>
    </>
  );
};

const TextContent = (props) => {
  const {
    sentence,
    position,
    rotation,
    scale,
    font,
    fillOpacity,
    strokeColor,
    strokeWidth,
    strokeOpacity,
  } = props;
  return (
    <Text
      font={font}
      strokeOpacity={strokeOpacity}
      strokeWidth={strokeWidth}
      strokeColor={strokeColor}
      fillOpacity={fillOpacity}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      {sentence}
    </Text>
  );
};

const Gallery = () => {};

export default Experience;
