import React from 'react';
import { useTheme } from 'next-themes';

const AnimatedParticlesBackground: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const bgColor = isDark ? 'bg-black' : 'bg-white';
  const particleColor1 = isDark ? 'rgba(124, 58, 237, 0.7)' : 'rgba(165, 180, 252, 0.9)';
  const particleColor2 = isDark ? 'rgba(59, 130, 246, 0.6)' : 'rgba(191, 219, 254, 0.9)';

  const particleStyles = Array.from({ length: 40 }).map((_, i) => {
    const size = Math.random() * 8 + 4;
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const delay = Math.random() * 2; // Atraso reduzido
    const duration = 2 + Math.random() * 3; // Duração reduzida

    const color = i % 2 === 0 ? particleColor1 : particleColor2;

    // Profundidade simulada
    const zIndex = Math.floor(Math.random() * 3); // 0 (próximo), 1 (médio), 2 (distante)
    const scale = 1 - zIndex * 0.2;
    const blur = zIndex * 2;
    const zTranslate = zIndex * -10; // simulando profundidade

    return (
      <div
        key={i}
        className="absolute rounded-full animate-pulse-slow"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          top: `${top}%`,
          backgroundColor: color,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          boxShadow: `0 0 8px ${color}`,
          transform: `translateZ(${zTranslate}px) scale(${scale})`,
          filter: `blur(${blur}px)`,
        }}
      />
    );
  });

  return (
    <div className={`absolute inset-0 overflow-hidden -z-10 ${bgColor}`} style={{ perspective: '800px' }}>
      {particleStyles}
    </div>
  );
};

export default AnimatedParticlesBackground;
