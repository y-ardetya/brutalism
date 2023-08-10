import { useTexture } from "@react-three/drei";
import Gallery from "./Gallery";

const Carousel = () => {
  const textures = useTexture([
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
  ]);
  return (
    <>
      {textures.map((texture, index) => (
        <Gallery key={index} texture={texture} index={index} />
      ))}
    </>
  );
};

export default Carousel;
