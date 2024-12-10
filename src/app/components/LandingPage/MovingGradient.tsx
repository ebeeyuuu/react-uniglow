"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

interface MovingGradientProps {
  baseColor?: string;
  accentColor?: string;
  density?: number;
  speed?: number;
  intensity?: number;
  vignetteIntensity?: number;
}

// Define the shader material
const GradientMaterial = shaderMaterial(
  {
    time: 0,
    baseColor: new THREE.Color("#7C3AED"),
    accentColor: new THREE.Color("#003DCC"),
    density: 3.0,
    speed: 0.2,
    intensity: 1.0,
    vignetteIntensity: 1.0,
    resolution: new THREE.Vector2(1, 1),
  },
  // Vertex shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment shader
  `
    uniform float time;
    uniform vec3 baseColor;
    uniform vec3 accentColor;
    uniform float density;
    uniform float speed;
    uniform float intensity;
    uniform float vignetteIntensity;
    uniform vec2 resolution;
    varying vec2 vUv;

    //
    // Description : Array and textureless GLSL 2D/3D/4D simplex 
    //               noise functions.
    //      Author : Ian McEwan, Ashima Arts.
    //  Maintainer : ijm
    //     Lastmod : 20110822 (ijm)
    //     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
    //               Distributed under the MIT License. See LICENSE file.
    //               https://github.com/ashima/webgl-noise
    // 

    vec3 mod289(vec3 x) {
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 mod289(vec4 x) {
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 permute(vec4 x) {
        return mod289(((x*34.0)+1.0)*x);
    }

    vec4 taylorInvSqrt(vec4 r)
    {
      return 1.79284291400159 - 0.85373472095314 * r;
    }

    float snoise(vec3 v)
    { 
      const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

      // First corner
      vec3 i  = floor(v + dot(v, C.yyy) );
      vec3 x0 =   v - i + dot(i, C.xxx) ;

      // Other corners
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );

      //   x0 = x0 - 0.0 + 0.0 * C.xxx;
      //   x1 = x0 - i1  + 1.0 * C.xxx;
      //   x2 = x0 - i2  + 2.0 * C.xxx;
      //   x3 = x0 - 1.0 + 3.0 * C.xxx;
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
      vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

      // Permutations
      i = mod289(i); 
      vec4 p = permute( permute( permute( 
                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
              + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

      // Gradients: 7x7 points over a square, mapped onto an octahedron.
      // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
      float n_ = 0.142857142857; // 1.0/7.0
      vec3  ns = n_ * D.wyz - D.xzx;

      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);

      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );

      //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
      //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));

      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

      vec3 p0 = vec3(a0.xy,h.x);
      vec3 p1 = vec3(a0.zw,h.y);
      vec3 p2 = vec3(a1.xy,h.z);
      vec3 p3 = vec3(a1.zw,h.w);

      //Normalise gradients
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;

      // Mix final noise value
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                    dot(p2,x2), dot(p3,x3) ) );
    }

    void main() {
      vec2 uv = vUv;
      
      // Adjust UV to maintain 1:1 aspect ratio
      float aspect = resolution.x / resolution.y;
      vec2 squareUV = uv * vec2(aspect, 1.0);
      squareUV = squareUV - vec2(0.5 * aspect - 0.5, 0.0);
      
      // Increase the density to make the gradient sharper
      float adjustedDensity = density * 2.0;
      
      float noise = snoise(vec3(squareUV * adjustedDensity, time * speed));
      vec3 color1 = baseColor;
      vec3 color2 = accentColor;
      vec3 mixedColor = mix(color1, color2, noise * intensity);
      
      // Calculate distance from center (now using squareUV)
      vec2 center = vec2(0.5, 0.5);
      float dist = distance(squareUV, center);
      
      // Create circular vignette effect
      float vignette = smoothstep(0.5, 0.2, dist);
      vignette = pow(vignette, vignetteIntensity);
      
      // Apply vignette to mixed color
      vec3 finalColor = mix(vec3(0.0), mixedColor, vignette);
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `,
);

type GradientMaterialImpl = {
  time: number;
  resolution: THREE.Vector2;
} & JSX.IntrinsicElements["shaderMaterial"];

extend({ GradientMaterial });

// Create a component for the animated plane
function AnimatedPlane({
  baseColor,
  accentColor,
  density,
  speed,
  intensity,
  vignetteIntensity,
}: MovingGradientProps) {
  const materialRef = useRef<GradientMaterialImpl>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.time = state.clock.getElapsedTime();
      materialRef.current.resolution.set(viewport.width, viewport.height);
    }
  });

  const uniforms = useMemo(
    () => ({
      baseColor: new THREE.Color(baseColor),
      accentColor: new THREE.Color(accentColor),
      density,
      speed,
      intensity,
      vignetteIntensity,
      resolution: new THREE.Vector2(viewport.width, viewport.height),
    }),
    [
      baseColor,
      accentColor,
      density,
      speed,
      intensity,
      vignetteIntensity,
      viewport.width,
      viewport.height,
    ],
  );

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry />
      <gradientMaterial ref={materialRef} {...uniforms} />
    </mesh>
  );
}

// Main component
export default function MovingGradient({
  baseColor = "#7C3AED",
  accentColor = "#003DCC",
  density = 3.0,
  speed = 0.2,
  intensity = 1.0,
  vignetteIntensity = 1.5,
}: MovingGradientProps) {
  return (
    <div className="w-full h-screen">
      <Canvas>
        <AnimatedPlane
          baseColor={baseColor}
          accentColor={accentColor}
          density={density}
          speed={speed}
          intensity={intensity}
          vignetteIntensity={vignetteIntensity}
        />
      </Canvas>
    </div>
  );
}
