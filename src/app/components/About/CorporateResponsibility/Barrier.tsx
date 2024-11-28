import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { ThreeEvent } from '@react-three/fiber';
import { Text } from '@react-three/drei';

interface BarrierProps {
  name: string;
  solution: string;
  position?: [number, number, number];
  color?: string;
  size?: [number, number, number];
}

const Barrier: React.FC<BarrierProps> = ({
  name,
  solution,
  position = [0, 2, 0],
  color = `hsl(${Math.random() * 360}, 70%, 60%)`,
  size = [2, 2, 0.2]
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);
  const [velocity, setVelocity] = useState(new THREE.Vector3(0, 0, 0));
  const [position3D, setPosition3D] = useState(new THREE.Vector3(...position));
  const offsetRef = useRef(new THREE.Vector3());

  const handlePointerDown = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setIsDragging(true);

    if (meshRef.current) {
      const worldPosition = new THREE.Vector3();
      meshRef.current.getWorldPosition(worldPosition);
      offsetRef.current.copy(event.point).sub(worldPosition);
    }
  };

  const handlePointerUp = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setIsDragging(false);

    if (position3D.y > 5) {
      setIsRemoved(true);
    } else {
      setVelocity(prev => prev.multiplyScalar(0.5));
    }
  };

  const handlePointerMove = (event: ThreeEvent<PointerEvent>) => {
    if (isDragging && meshRef.current) {
      const newPosition = new THREE.Vector3(
        event.point.x - offsetRef.current.x,
        event.point.y - offsetRef.current.y,
        0
      );

      const newVelocity = newPosition.clone().sub(position3D);
      setVelocity(newVelocity);
      setPosition3D(newPosition);

      meshRef.current.rotation.z = -newVelocity.x * 2;
      meshRef.current.rotation.x = newVelocity.y * 2;
    }
  };

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      if (!isRemoved && !isDragging) {
        setVelocity(prev => {
          const gravity = new THREE.Vector3(0, -0.01, 0);
          const newVelocity = prev.clone().add(gravity).multiplyScalar(0.99);
          
          const newPosition = position3D.clone().add(newVelocity);
          
          if (newPosition.y < 0) {
            newPosition.y = 0;
            newVelocity.setY(0);
          }

          setPosition3D(newPosition);
          
          return newVelocity;
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isRemoved, isDragging, position3D]);

  return (
    <>
      {!isRemoved && (
        <mesh 
          ref={meshRef}
          position={[position3D.x, position3D.y, position3D.z]}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerMove={handlePointerMove}
        >
          <boxGeometry args={size} />
          <meshStandardMaterial color={color} transparent opacity={0.8} />
          <Text
            position={[0, 0, size[2]/2 + 0.01]}
            fontSize={0.2}
            color="white"
            anchorX="center"
            anchorY="middle"
            maxWidth={size[0] * 0.9}
          >
            {name}
          </Text>
        </mesh>
      )}
      
      {isRemoved && (
        <Text
          position={[position3D.x, position3D.y, position3D.z]}
          fontSize={0.2}
          color="black"
          anchorX="center"
          anchorY="middle"
          maxWidth={6}
        >
          {solution}
        </Text>
      )}
    </>
  );
};

export default Barrier;
