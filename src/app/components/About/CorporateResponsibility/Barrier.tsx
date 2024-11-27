import React, { useRef, useState } from "react";
import { useFrame, ThreeEvent } from "@react-three/fiber";
import { Mesh, Vector3 } from "three";
import { Text } from "@react-three/drei";
import { useSpring, animated, config } from "@react-spring/three";

interface BarrierProps {
  name: string;
  solution: string;
  color?: string | [string, string];
  onRemove: (name: string) => void;
}

const Barrier: React.FC<BarrierProps> = ({ 
  name, 
  solution, 
  color = "orange", 
  onRemove 
}) => {
  const meshRef = useRef<Mesh>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  const [{ position }, positionApi] = useSpring(() => ({
    position: [0, 0, 0] as Vector3,
    config: { mass: 1, tension: 170, friction: 26 }
  }));

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setIsDragging(true);
  };

  const handlePointerUp = () => {
    if (isDragging) {
      setIsRemoved(true);
      onRemove(name);
      positionApi.start({
        position: [
          Math.random() * 20 - 10, 
          -10, 
          Math.random() * 20 - 10
        ]
      });
    }
    setIsDragging(false);
  };

  useFrame((state) => {
    if (isDragging && meshRef.current) {
      const [x, y] = state.mouse;
      positionApi.start({
        position: [x * 5, y * 5, 0]
      });
    }
  });

  const materialProps = Array.isArray(color) 
    ? { 
        color: color[0], 
        emissive: color[1], 
        emissiveIntensity: 0.2 
      }
    : { color };

  return !isRemoved ? (
    <animated.mesh
      ref={meshRef}
      position={position}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      scale={isDragging ? 1.05 : 1}
    >
      <boxGeometry args={[2, 2, 0.2]} />
      <meshStandardMaterial {...materialProps} />
      <Text 
        position={[0, 0, 0.11]} 
        fontSize={0.3} 
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </animated.mesh>
  ) : (
    <animated.mesh position={position}>
      <Text 
        position={[0, 0, 0]} 
        fontSize={0.3} 
        color="green"
        anchorX="center"
        anchorY="middle"
      >
        {solution}
      </Text>
    </animated.mesh>
  );
};

export default Barrier;
