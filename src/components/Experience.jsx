import { Scroll, Text } from "@react-three/drei";
import Model from "./Ca";
import Overlay from "./Overlay";
import font1 from "/Bangers-Regular.ttf";
import font2 from "/Aden.ttf";

const Experience = () => {
  return (
    <>
      <Model />
      <Scroll>
        <TextContent
          font={font1}
          sentence={"REDIRECT"}
          position={[0, -1, -5]}
          rotation={[0, 0, 0.1]}
          scale={9}
        />
        <TextContent
          font={font1}
          sentence={"THE FUTURE"}
          position={[0, -15, -5]}
          rotation={[0, 0, 0.1]}
          scale={7}
        />
        <TextContent
          font={font2}
          sentence={"Signature"}
          position={[-6.5, 3.5, -5]}
          rotation={[0, 0, 0.1]}
          scale={3}
        />
      </Scroll>

      <Scroll html>
        <group>
          <Overlay />
        </group>
      </Scroll>
    </>
  );
};

const TextContent = ({ sentence, position, rotation, scale, font }) => {
  return (
    <Text font={font} position={position} rotation={rotation} scale={scale}>
      {sentence}
    </Text>
  );
};

export default Experience;
