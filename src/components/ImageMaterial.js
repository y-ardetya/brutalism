import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

const ImageMaterial = shaderMaterial(
  {
    uTexture: null,
    uProgress: 0,
    uScale: 0,
  },
  /* glsl */ `
        uniform float uProgress;
        uniform float uScale;
        uniform float uTrack;
       
        varying vec2 vUv;
  

        vec2 uViewSize = vec2(25., 1.);
        float PI = 3.141592653589793238;

        void main () {
            vUv = uv;
            vec4 viewPos = modelViewMatrix * vec4(position,1.);
            viewPos.z += cos(viewPos.x / uViewSize.x * PI) * uScale;
            gl_Position = projectionMatrix * viewPos;
        }
    `,
  /* glsl */ `
        uniform sampler2D uTexture;
        varying vec2 vUv;
  
        void main () {
            vec4 color = texture2D(uTexture, vUv);

            gl_FragColor = color;
    }`
);

extend({ ImageMaterial });

export { ImageMaterial };
