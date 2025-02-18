import React from "react";
import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";

const FilmGrainShaderMaterial = shaderMaterial(
  {
    iTime: 0,
    filmGrainIntensity: 0.1,
    iResolution: new THREE.Vector3(1, 1, 1),
    color1: new THREE.Color(1.0, 0.0, 0.0), // Default red
    color2: new THREE.Color(0.0, 1.0, 0.0), // Default green
    color3: new THREE.Color(0.0, 0.0, 1.0), // Default blue
    color4: new THREE.Color(1.0, 1.0, 0.0) // Default yellow
  },

  // Vertex Shader
  `
  varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,

  // Fragment Shader
  `
  #define filmGrainIntensity 0.1

    varying vec2 vUv;
    uniform vec3 iResolution;
    uniform float iTime;
    uniform vec3 color1;
    uniform vec3 color2;
    uniform vec3 color3;
    uniform vec3 color4;

    mat2 Rot(float a) {
        float s = sin(a);
        float c = cos(a);
        return mat2(c, -s, s, c);
    }

    vec2 hash(vec2 p) {
        p = vec2(dot(p, vec2(2127.1, 81.17)), dot(p, vec2(1269.5, 283.37)));
        return fract(sin(p) * 43758.5453);
    }

    float noise(in vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);

        vec2 u = f * f * (3.0 - 2.0 * f);

        float n = mix(mix(dot(-1.0 + 2.0 * hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
                          dot(-1.0 + 2.0 * hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
                      mix(dot(-1.0 + 2.0 * hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
                          dot(-1.0 + 2.0 * hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
        return 0.0 + 2.5 * n;
    }

    float filmGrainNoise(in vec2 uv) {
        return length(hash(vec2(uv.x, uv.y)));
    }

    void main() {
        vec2 uv = gl_FragCoord.xy / iResolution.xy;
        float aspectRatio = iResolution.x / iResolution.y;

        // Center the UV coordinates
        vec2 tuv = uv - 0.5;

        // Adjust the X coordinate based on the aspect ratio
        tuv.x *= aspectRatio;

        // Rotate with noise
        float degree = noise(vec2(iTime * 0.2, tuv.y * -tuv.x));

        // Apply rotation matrix
        tuv *= Rot(radians((degree - 0.4) * 60.0 + 180.0));

        // Increase the size of the red color gradient
        tuv.y += 0.5; // Increase this value to make red larger

        // Define gradient colors
        vec3 lightRed = color1 ;
        vec3 darkRed = color2 ;
        vec3 lightBlue = color3 ;
        vec3 darkBlue = color4 ;

        // Interpolate between gradients with adjusted values
        float t = smoothstep(-0.2, 0.3, tuv.y); // Adjust these values to increase the size of red
        vec3 color = mix(lightBlue, lightRed, t);

        // Blend further to give smooth sides
        color = mix(color, darkBlue, smoothstep(-0.2, 1.0, abs(tuv.x)));

        // Apply film grain
        color = color - filmGrainNoise(uv) * filmGrainIntensity;

        gl_FragColor = vec4(color, 1.0);
    }
  `
);

// Extend the shader material so it can be used as JSX
extend({ FilmGrainShaderMaterial });

export const PlaneShader: React.FC<{ colors: string[] }> = ({ colors }) => {
  const shaderRef = React.useRef<any>(null);
  const [resolution, setResolution] = React.useState([0, 0]);

  React.useEffect(() => {
    const handleResize = () => {
      setResolution([window.innerWidth, window.innerHeight]);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame(({ clock }) => {
    if (shaderRef.current) {
      shaderRef.current.iTime = clock.getElapsedTime();
    }
  });

  return (
    <mesh>
      <planeGeometry args={[900, 100]} />
      <shaderMaterial />

      <filmGrainShaderMaterial
        ref={shaderRef}
        iResolution={[resolution[0], resolution[1], 1]}
        color1={new THREE.Color(colors[0])} // Converted to vec3
        color2={new THREE.Color(colors[1])} // Converted to vec3
        color3={new THREE.Color(colors[2])} // Converted to vec3
        color4={new THREE.Color(colors[3])} // Converted to vec3
      />
    </mesh>
  );
};

declare module "@react-three/fiber" {
  interface ThreeElements {
    filmGrainShaderMaterial: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      iResolution: [number, number, number];
      color1: THREE.Color;
      color2: THREE.Color;
      color3: THREE.Color;
      color4: THREE.Color;
    };
  }
}
