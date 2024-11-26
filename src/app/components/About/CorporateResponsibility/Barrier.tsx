import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { animated } from "react-spring";
import { Mesh } from "three";
import { Text } from "@react-three/drei";

interface BarrierProps {
  name: string;
  solution: string;
  onRemove: (name: string) => void;
}

const Barrier: React.FC<BarrierProps> = ({ name, solution, onRemove }) => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [removed, setRemoved] = useState(false);
  const [position] = useState<[number, number, number]>([
    Math.random() * 5,
    Math.random() * 5,
    Math.random() * 5,
  ]);

  const handlePointerDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setRemoved(true);
    onRemove(name);
  };

  useFrame(() => {
    if (meshRef.current && !removed) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  if (removed) {
    return (
      <animated.mesh position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="transparent" />
        <Text position={[0, 1.2, 0]} fontSize={0.2} color="green">
          {solution}
        </Text>
      </animated.mesh>
    );
  }

  return (
    <animated.mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onPointerDown={handlePointerDown}
      scale={hovered ? 1.1 : 1}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      <Text position={[0, 1.2, 0]} fontSize={0.2} color="white">
        {name}
      </Text>
    </animated.mesh>
  );
};

export default Barrier;
