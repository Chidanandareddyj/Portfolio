"use client";

import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React, { MouseEvent as ReactMouseEvent, useEffect, useState } from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { cn } from "@/lib/utils";

export const CardSpotlightAlways = ({
  children,
  radius = 350,
  color = "#262626",
  className,
  initialX = 150,
  initialY = 150,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
  initialX?: number;
  initialY?: number;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(initialX);
  const mouseY = useMotionValue(initialY);
  
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Always show the effect, even without hover
  const [isActive, setIsActive] = useState(true);

  // Optional: Animate the spotlight position even when not hovering
  useEffect(() => {
    // This effect is just an example - you can remove it if you want a static position
    const interval = setInterval(() => {
      const newX = initialX + Math.sin(Date.now() / 2000) * 50;
      const newY = initialY + Math.cos(Date.now() / 2000) * 30;
      mouseX.set(newX);
      mouseY.set(newY);
    }, 100);
    
    return () => clearInterval(interval);
  }, [mouseX, mouseY, initialX, initialY]);

  return (
    <div
      className={cn(
        "group/spotlight p-10 rounded-md relative border border-neutral-800 bg-black dark:border-neutral-800",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsActive(true)}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-100"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      >
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-transparent absolute inset-0 pointer-events-none"
          colors={[
            [59, 130, 246],
            [139, 92, 246],
          ]}
          dotSize={3}
        />
      </motion.div>
      {children}
    </div>
  );
};
