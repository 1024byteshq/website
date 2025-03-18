import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  id: number;
}

const ParticleFlow: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position tracking with spring physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 200 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (!containerRef.current) return;

    const { width, height } = containerRef.current.getBoundingClientRect();
    const newParticles = Array.from({ length: 75 }).map((_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 5 + 3,
      speedX: (Math.random() - 0.5) * 1,
      speedY: (Math.random() - 0.5) * 1,
      id: i,
    }));
    setParticles(newParticles);

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const getDistanceFromMouse = (x: number, y: number) => {
    const dx = x - springX.get();
    const dy = y - springY.get();
    return Math.sqrt(dx * dx + dy * dy);
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[1] overflow-hidden"
      style={{ opacity: 0.3 }}
    >
      <div className="particle-container">
        {particles.map((particle) => {
          const distance = getDistanceFromMouse(particle.x, particle.y);
          const isNearby = distance < 150;
          const opacity = isNearby ? Math.max(0.7, 1 - distance / 150) : 0.2;
          const scale = isNearby ? 1 + (1 - distance / 150) * 1 : 1;

          return (
            <motion.div
              key={particle.id}
              className="particle"
              style={{
                width: particle.size,
                height: particle.size,
                left: particle.x,
                top: particle.y,
                opacity,
                scale,
              }}
              animate={{
                x: [particle.x, particle.x + particle.speedX * 200, particle.x],
                y: [particle.y, particle.y + particle.speedY * 200, particle.y],
                opacity: [opacity, opacity * 1.4, opacity],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ParticleFlow;
