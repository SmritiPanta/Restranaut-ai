"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

import { PlaneShader } from "./PlaneShader";

type GradientSceneProps = {
  className?: string;
  colors: string[];
};

export const GradientScene: React.FC<GradientSceneProps> = (props) => {
  const { className, colors } = props;

  return (
    <div
      className={twMerge(
        "absolute inset-0 pointer-events-none -z-1",
        className
      )}>
      <Canvas gl={{ antialias: true }} shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 0.1]} />
        <fog args={["rgba(2, 6, 8, 1)", 30, 10]} attach="fog" />
        <PlaneShader colors={colors} />
      </Canvas>
    </div>
  );
};
